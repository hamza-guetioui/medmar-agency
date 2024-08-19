import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { validateMemberData } from "@/utils/apiUtils/validateMemberData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get All Members | by SearchParams
export async function GET(request: NextRequest) {
  // Fetch all members from the database and sort by creation date in descending order
  try {
    await connectToMongoDb();
    const members = await Member.find().sort({ createdAt: -1 });

    // Return the fetched members in the response
    return NextResponse.json(
      { message: "Members fetched successfully", data: members },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors that occur during the fetch operation
    const { message, error } = handleError("Failed to fetch members", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Create Member
export async function POST(request: NextRequest) {
  // Extract form data from the request
  const formData = await request.formData();

  // Validate the form data and extract member data
  const { error, data } = await validateMemberData(formData);
  if (error) {
    // Return an error response if validation fails
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Create a new member record in the database
    const member = await Member.create(data);

    // Return a success response with the newly created member data
    return NextResponse.json(
      { message: "A new member has been successfully added.", data: member },
      { status: 201 }
    );
  } catch (err) {
    // If an error occurs, remove the uploaded profile file to prevent orphaned files
    removeFile(data.profile);

    // Handle any errors that occur during the create operation
    const { message, error } = handleError("Failed to add a new member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
