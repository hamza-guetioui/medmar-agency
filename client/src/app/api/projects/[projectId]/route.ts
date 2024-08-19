import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Project from "@/model/project";
import Customer from "@/model/customer";
import Service from "@/model/service";

import { validateProjectData } from "@/utils/apiUtils/validateProjectData";
import { handleError } from "@/utils/apiUtils/handleError";
import { validate_Id } from "@/utils/apiUtils/validate_Id";
import { getProject } from "@/utils/actions/Projects";
import { removeFile } from "@/utils/apiUtils/handleFile";
import { IProject } from "@/Types";

// Get a Project by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  // Validate the project ID format
  if (!validate_Id(projectId)) {
    return NextResponse.json(
      { message: "Invalid project ID format" },
      { status: 400 }
    );
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
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Reshape the project data to include customer and services as separate fields
    const { customerId, serviceIds, ...rest } = project.toObject();
    project = {
      ...rest,
      customer: customerId,
      services: serviceIds,
    };

    return NextResponse.json(
      { message: "Project fetched successfully", data: project },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors that occur during the fetch
    const { message, error } = handleError("Error fetching project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Update a Project
export async function PUT(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  // Validate the project ID format
  if (!validate_Id(projectId)) {
    return NextResponse.json(
      { message: "Invalid project ID format" },
      { status: 400 }
    );
  }

  // Extract form data from the request
  const formData = await request.formData();
  const { error, data } = await validateProjectData(formData, projectId);

  // Handle validation errors
  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  let project;
  try {
    await connectToMongoDb();

    // Fetch the existing project from the database
    project = await getProject(projectId);

    // Handle case where the project does not exist
    if (!project) {
      if (data.previewImage) await removeFile(data.previewImage);
      return NextResponse.json(
        { message: "Failed to update, no project found!", data: null },
        { status: 404 }
      );
    }

    // Update the project with the new data
    const updatedProject = await Project.findByIdAndUpdate(projectId, data, {
      new: true,
      runValidators: true,
    });

    // Check if the update was successful
    if (!updatedProject) {
      throw new Error("Something went wrong");
    }

    // Handle file removal if the preview image has changed
    if (
      updatedProject.previewImage &&
      project.previewImage !== updatedProject.previewImage
    ) {
      await removeFile(project.previewImage);
    }

    return NextResponse.json(
      { message: "Project updated successfully", data: updatedProject },
      { status: 200 }
    );
  } catch (err) {
    // Handle errors during the update process and ensure files are managed correctly
    if (
      project &&
      data.previewImage &&
      project.previewImage !== data.previewImage
    ) {
      await removeFile(data.previewImage);
    }
    const { message, error } = handleError("Failed to update project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Delete a Project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  // Validate the project ID format
  if (!validate_Id(projectId)) {
    return NextResponse.json(
      { message: "Invalid project ID format" },
      { status: 400 }
    );
  }

  try {
    await connectToMongoDb();

    // Delete the project from the database
    const project = await Project.findByIdAndDelete(projectId);

    // Handle case where the project was not found
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Remove the project's preview image if it exists
    if (project.previewImage) await removeFile(project.previewImage);

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Handle errors during the delete process
    const { message, error } = handleError("Failed to delete project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
