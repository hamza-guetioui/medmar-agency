"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import Project from "@/model/project";
import Service from "@/model/service";
import { ICustomer, IProjectData, IProjectDetail, IService } from "@/Types";
import { revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";

// Get All Projects
export const getProjects = async () => {
  try {
    await connectToMongoDb();

    // Retrieve projects and populate customer and service details
    let projects = await Project.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "customerId",
        model: Customer,
        select: "_id profile fullName jobTitle", // Select specific fields for Customer
      })
      .populate({
        path: "serviceIds",
        model: Service,
        select: "title _id", // Select specific fields for Service
      })
      .lean();

    // Handle case where no projects are found
    if (!projects || projects.length === 0) {
      throw new Error("no project found");
    }

    // Convert each project to a plain JavaScript object
    const formattedProjects: IProjectData[] = projects.map((project: any) => {
      const { customerId, serviceIds, details, ...rest } = project;

      // Ensure customerId and serviceIds are correctly typed
      return {
        ...rest,
        customer: customerId as ICustomer, // Ensure this is populated correctly
        services: serviceIds as IService[], // Ensure this is populated correctly
      } as IProjectData;
    });

    return formattedProjects;
  } catch (err) {
    // Log and handle errors during the fetch
    console.log(err);
  }
};

export const getProject = async (projectId: string) => {
  // Validate the project ID format
  if (!validate_Id(projectId)) {
    throw new Error("Invalid project ID format");
  }

  try {
    await connectToMongoDb();

    // Fetch the project from the database and populate related customer and service details
    let project = await Project.findById(projectId)
      .populate({
        path: "customerId",
        model: Customer,
        select: "_id profile job title", // Select specific fields from the Customer model
      })
      .populate({
        path: "serviceIds",
        model: Service,
        select: "title _id", // Select specific fields from the Service model
      });

    // Check if the project was found
    if (!project) {
      throw new Error("Project not found");
    }

    // Reshape the project data to include customer and services as separate fields
    const { customerId, serviceIds, ...rest } = project.toObject();
    project = {
      ...rest,
      customer: customerId,
      services: serviceIds,
    };

    return project;
  } catch (err) {
    console.log(err);
  }
};

export async function createProject(formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/projects`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error creating project:", message);
      return;
    }
    console.log("Project created successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function updateProject(projectId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/projects/${projectId}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error updating project:", message);
      return;
    }
    console.log("Project updated successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(formData: FormData) {
  const projectId = formData.get("projectId") as string;
  try {
    const response = await fetch(`${baseUrl}/api/projects/${projectId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error deleting project:", message);
      return;
    }
    console.log("Project deleted successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
