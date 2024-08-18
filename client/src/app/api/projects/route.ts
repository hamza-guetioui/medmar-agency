import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Project from "@/model/project";
import Customer from "@/model/customer";
import { validateProjectData } from "@/utils/apiUtils/validateProjectData";
import { handleError } from "@/utils/apiUtils/handleError";
import Service from "@/model/service";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get All Projects | by SearchParams
export async function GET(request: NextRequest) {
  // searchParams
  try {
    await connectToMongoDb();

    // Retrieve projects and populate customer and service details
    let projects = await Project.find()
      .sort({ createdAt: -1 }) // Sort by creation date, descending
      .populate({
        path: "customerId",
        model: Customer,
        select: "_id profile fullName jobTitle", // Select specific fields for Customer
      })
      .populate({
        path: "serviceIds",
        model: Service,
        select: "title _id", // Select specific fields for Service
      });

    // Handle case where no projects are found
    if (!projects || projects.length === 0) {
      return NextResponse.json(
        { message: "No Projects Results" },
        { status: 404 }
      );
    }

    // Reshape the project data to include customer and services as separate fields
    projects = projects.map((project) => {
      const { customerId, serviceIds, ...rest } = project.toObject();
      return {
        ...rest,
        customer: customerId,
        services: serviceIds,
      };
    });

    return NextResponse.json(
      { message: "Projects fetched successfully", data: projects },
      { status: 200 }
    );
  } catch (err) {
    // Log and handle errors during the fetch
    console.log(err);
    const { message, error } = handleError("Error fetching projects:", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Create Project
export async function POST(request: NextRequest) {
  // Extract form data from the request
  const formData = await request.formData();

  // Validate and extract project data from the form
  const { error, data } = await validateProjectData(formData);

  // Handle validation errors
  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  try {
    await connectToMongoDb();

    // Create a new project in the database
    const project = await Project.create(data);

    return NextResponse.json(
      { message: "Project Added successfully", data: project },
      { status: 201 }
    );
  } catch (err) {
    // handle file remove if creation field
    if (data.previewImage) {
      await removeFile(data.previewImage);
    }
    const { message, error } = handleError("Error adding Project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
