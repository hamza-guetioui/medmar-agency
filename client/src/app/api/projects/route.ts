import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Project from "@/model/project";
import Customer from "@/model/customer";
import { validateProjectData } from "@/utils/apiUtils/validateProjectData";
import { handleError } from "@/utils/apiUtils/handleError";

export async function GET(request: NextRequest) {
  try {
    await connectToMongoDb();
    let projects = await Project.find().sort({ createdAt: -1 }).populate({
      path: "customerId",
      model: Customer,
    });

    // Rename customerId to customer
    projects = projects.map((project) => {
      const { customerId, ...rest } = project.toObject();
      return {
        ...rest,
        customer: customerId,
      };
    });

    return NextResponse.json(
      { message: "Projects fetched successfully", data: projects },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error fetching projects:", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("customerId");
  const { message, customerId } = validateCustomerId(id);
  if (message || customerId == null) {
    return NextResponse.json({ message }, { status: 400 });
  }

  const formData = await request.formData();
  const { error, data } = validateProjectData(formData, customerId);

  if (error || !data) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 400 }
    );
  }

  try {
    await connectToMongoDb();
    await Project.create(data);

    return NextResponse.json(
      { message: "Project Added successfully" },
      { status: 201 }
    );
  } catch (err) {
    const { message, error } = handleError("Error adding Project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

const validateCustomerId = (customerId: string | null) => {
  if (!customerId) {
    return { message: "Customer ID is required", customerId: null };
  }

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return { message: "Invalid customer ID format" };
  }
  return { message: null, customerId };
};
