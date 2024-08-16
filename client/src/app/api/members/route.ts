import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { validateMemberData } from "@/utils/apiUtils/validateMemberData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get All | by SearchParams
export async function GET(request: NextRequest) {
  // searchPrams
  try {
    await connectToMongoDb();
    const members = await Member.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Members fetched successfully", data: members },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to fetch members", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Insert New Member
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const { error, data } =await validateMemberData(formData);
  if (error) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  try {
    await connectToMongoDb();
    const member = await Member.create(data);

    return NextResponse.json(
      { message: "A new member has been successfully added.", data: member },
      { status: 201 }
    );
  } catch (err) {
    removeFile(data.profile);
    const { message, error } = handleError("Failed to add a new member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
