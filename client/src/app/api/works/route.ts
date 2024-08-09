import connectMongDb from "@/libs/mongoDb";
import { NextResponse, NextRequest } from "next/server";
import Work from "@/model/work";

interface WorkData {
  title: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  videoDescription?: string;
  additionalInfo?: string[];
}

export async function GET() {
  try {
    await connectMongDb();
    const works = await Work.find().exec();

    return NextResponse.json(
      { message: "Works fetched successfully", data: works },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching Works:", err);

    return NextResponse.json(
      { message: "Failed to fetch works", data: null },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const {
    title,
    description,
    imageSrc,
    videoSrc,
    videoDescription,
    additionalInfo,
  }: WorkData = await request.json();

  if (!title || !description || imageSrc === undefined) {
    return NextResponse.json(
      {
        message: "title , description and image fields are required",
        data: null,
      },
      { status: 400 }
    );
  }

  try {
    await connectMongDb();
    const work = await Work.create({
      title,
      description,
      imageSrc,
      videoSrc,
      videoDescription,
      additionalInfo,
    });

    return NextResponse.json(
      { message: "Work Created successfully", data: work },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error Creating The work:", err);
    return NextResponse.json(
      { message: "Failed to create work", data: null },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  const {
    title,
    description,
    imageSrc,
    videoSrc,
    videoDescription,
    additionalInfo,
  }: WorkData = await request.json();

  if (!title || !description || imageSrc === undefined) {
    return NextResponse.json(
      {
        message: "title , description and image fields are required",
        data: null,
      },
      { status: 400 }
    );
  }

  try {
    await connectMongDb();
    const work = await Work.findByIdAndUpdate(
      id,
      {
        title,
        description,
        imageSrc,
        videoSrc,
        videoDescription,
        additionalInfo,
      },
      { new: true, runValidators: true }
    );

    if (!work) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Work Updated successfully", data: work },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error Updating The work:", err);
    return NextResponse.json(
      { message: "Failed to Update work" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongDb();
    const work = await Work.findByIdAndDelete(id);

    if (!work) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Work Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error Deleting The work:", err);
    return NextResponse.json(
      { message: "Failed to Delete work" },
      { status: 500 }
    );
  }
}
