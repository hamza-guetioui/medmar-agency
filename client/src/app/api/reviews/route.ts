import connectMongDb from "@/libs/mongoDb";
import { NextResponse, NextRequest } from "next/server";
import Review from "@/model/review";

// interface ReviewData {
//   name: string;
//   job: string;
//   rate: number;
//   comment: string;
// }

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongDb();
    if (id) {
      const review = await Review.findById(id);
      return NextResponse.json(
        { message: "Reviews fetched successfully", data: review },
        { status: 200 }
      );
    } else {
      const reviews = await Review.find().sort({ createdAt: -1 });
      return NextResponse.json(
        { message: "Reviews fetched successfully", data: reviews },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error("Error fetching reviews:", err);

    return NextResponse.json(
      { message: "Failed to fetch reviews", data: null },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name");
  const job = formData.get("job");
  const rate = formData.get("rate");
  const comment = formData.get("comment");
  const imageSrc = "heloo";

  if (!name || !job || rate === undefined || !comment) {
    return NextResponse.json(
      { message: "All fields are required", data: null },
      { status: 400 }
    );
  }

  try {
    await connectMongDb();
    const review = await Review.create({ name, job, rate, comment, imageSrc });

    return NextResponse.json(
      { message: "Review Created successfully", data: review },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error Creating The review:", err);
    return NextResponse.json(
      { message: "Failed to create review", data: null },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const formData = await request.formData();

  const name = formData.get("name");
  const job = formData.get("job");
  const rate = formData.get("rate");
  const comment = formData.get("comment");
  const imageSrc = "heloo";

  if (!name || !job || rate === undefined || !comment) {
    return NextResponse.json(
      { message: "All fields are required", data: null },
      { status: 400 } // Bad Request for missing fields
    );
  }

  try {
    await connectMongDb();
    const review = await Review.findByIdAndUpdate(
      id,
      { name, job, rate, comment },
      { new: true, runValidators: true }
    );

    if (!review) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Review Updated successfully", data: review },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error Updating The review:", err);
    return NextResponse.json(
      { message: "Failed to Update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongDb();
    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Review Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error Deleting The review:", err);
    return NextResponse.json(
      { message: "Failed to Delete review" },
      { status: 500 }
    );
  }
}
