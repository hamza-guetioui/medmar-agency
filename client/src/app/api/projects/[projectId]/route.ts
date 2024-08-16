import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Project from "@/model/project";
import { validateProjectData } from "@/utils/apiUtils/validateProjectData";
import { handleError } from "@/utils/apiUtils/handleError";
import { GetStaticPaths } from "next";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const projects = await Project.find();
//   const paths = projects.map((project) => {
//     return { params: { projectId: project._id.toString() } };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// };

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();
    const project = await Project.findById(projectId);

    return NextResponse.json(
      { message: "project fetched successfully", data: project },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error Fetching project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const { error, data } = validateProjectData(formData, projectId);

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
    const project = await Project.findByIdAndUpdate(projectId, data, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Project Updated successfully", data: project },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to update project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return NextResponse.json(
      { message: "Invalid project ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();

    const project = await Project.findByIdAndDelete(projectId);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete project", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
