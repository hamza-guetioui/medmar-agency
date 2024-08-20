"use server";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import Project from "@/model/project";
import Service from "@/model/service";
import { ICustomer, IProjectData, IService } from "@/Types";
import { revalidatePath, revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";
import { validateProjectData } from "../apiUtils/validateProjectData";
import { removeFile } from "../apiUtils/handleFile";

// Get All Projects
export const getProjects = async (): Promise<IProjectData[]> => {
  "use server";

  try {
    await connectToMongoDb();

    // Retrieve projects and populate customer and service details
    let projects = await Project.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "customerId",
        model: Customer,
        select: "_id profile fullName jobTitle",
      })
      .populate({
        path: "serviceIds",
        model: Service,
        select: "title _id",
      })
      .lean();

    if (!projects || projects.length === 0) {
      throw new Error("no project found");
    }

    // Convert each project to a plain JavaScript object
    const formattedProjects: IProjectData[] = projects.map((project: any) => {
      const { customerId, serviceIds, details, ...rest } = project;

      // Ensure customerId and serviceIds are correctly typed and converted
      const customer = customerId
        ? {
            _id: customerId._id.toString(),
            fullName: customerId.fullName,
            jobTitle: customerId.jobTitle,
            profile: customerId.profile,
          }
        : null;

      const services = serviceIds
        ? serviceIds.map((service: any) => ({
            _id: service._id.toString(),
            title: service.title,
          }))
        : [];

      const projectDetails = details
        ? details.map((detail: any) => ({
            _id: detail._id.toString(),
            feature: detail.feature,
            description: detail.description,
          }))
        : [];

      // Return plain JavaScript object
      return {
        ...rest,
        _id: project._id.toString(),
        customer,
        services,
        details: projectDetails,
      } as IProjectData;
    });

    return formattedProjects;
  } catch (err) {
    console.log(err);
    throw err; // Ensure errors are thrown to be handled upstream
  }
};

export const getProject = async (projectId: string) => {
  "use server";

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
      })
      .populate({
        path: "serviceIds",
        model: Service,
      });

    // Check if the project was found
    if (!project) {
      throw new Error("Project not found");
    }

    // Reshape the project data to include customer and services as separate fields
    return {
      _id: project._id.toString(), // Convert ObjectId to string
      title: project.title,
      description: project.description,
      previewImage: project.previewImage,
      link: project.link,
      details:
        project.details?.map((detail: any) => ({
          _id: detail._id.toString(),
          feature: detail.feature,
          description: detail.description,
        })) || [],
      customer: {
        _id: project.customerId._id.toString(),
        fullName: project.customerId.fullName,
        jobTitle: project.customerId.jobTitle,
        email: project.customerId.email,
        phone: project.customerId.phone,
        avatar: project.customerId.avatar,
        testimonial: project.customerId.testimonial,
        rating: project.customerId.rating,
        businessLogo: project.customerId.businessLogo,
        published: project.customerId.published,
      } as ICustomer,
      services: project.serviceIds.map((service: any) => ({
        _id: service._id.toString(),
        title: service.title,
      })) as IService[],
    } as IProjectData

  } catch (err) {
    console.log(err);
  }
};

export async function createProject(formData: FormData) {
  "use server";
  // Validate and extract project data from the form
  const { error, data } = await validateProjectData(formData);

  // Handle validation errors
  if (error || !data) {
    return { message: error };
  }

  try {
    await connectToMongoDb();

    // Create a new project in the database
    await Project.create(data);
    revalidatePath("/admin/dashboard/projects");

    return { message: "Project Added successfully" };
  } catch (err) {
    // handle file remove if creation field
    console.log(err);
    if (data.previewImage) {
      await removeFile(data.previewImage);
    }
    return { message: "Error adding Project" };
  }
}

export async function updateProject(projectId: string, formData: FormData) {
  "use server";
  // Validate the project ID format
  if (!validate_Id(projectId)) {
    return { message: "Invalid project ID format" };
  }

  // Extract form data from the request

  const { error, data } = await validateProjectData(formData, projectId);

  // Handle validation errors
  if (error || !data) {
    return { message: error };
  }

  let project;
  try {
    await connectToMongoDb();

    // Fetch the existing project from the database
    project = await getProject(projectId);

    // Handle case where the project does not exist
    if (!project) {
      if (data.previewImage) await removeFile(data.previewImage);
      return { message: "Failed to update, no project found!" };
    }

    // Update the project with the new data
    const updatedProject = await Project.findByIdAndUpdate(projectId, data, {
      new: true,
      runValidators: true,
    });

    // Check if the update was successful
    if (!updatedProject) {
      return { message: "Something went wrong" };
    }

    // Handle file removal if the preview image has changed
    if (
      updatedProject.previewImage &&
      project.previewImage !== updatedProject.previewImage
    ) {
      await removeFile(project.previewImage);
    }
    revalidatePath("/admin/dashboard/projects");


    return { message: "Project updated successfully" };
  } catch (err) {
    // Handle errors during the update process and ensure files are managed correctly
    console.log(err);
    if (
      project &&
      data.previewImage &&
      project.previewImage !== data.previewImage
    ) {
      await removeFile(data.previewImage);
    }
    return { message: "Failed to update project" };
  }
}

export async function deleteProject(formData: FormData) {
  "use server";
  const projectId = formData.get("projectId") as string;
  if (!validate_Id(projectId)) {
    return { message: "Invalid project ID format" };
  }

  try {
    await connectToMongoDb();

    // Delete the project from the database
    const project = await Project.findByIdAndDelete(projectId);

    // Handle case where the project was not found
    if (!project) {
      return { message: "Project not found" };
    }

    // Remove the project's preview image if it exists
    if (project.previewImage) await removeFile(project.previewImage);
    revalidatePath("/admin/dashboard/projects");

    return { message: "Project deleted successfully" };
  } catch (err) {
    // Handle errors during the delete process
    return { message: "Failed to delete project" };
  }
}
