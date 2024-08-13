import "server-only";

import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/members";
import { validateMemberData } from "@/utils/apiUtils/validateMemberData";
import { handleError } from "@/utils/apiUtils/handleError";
import { GetStaticPaths } from "next";



export async function PUT(
  request: NextRequest,
  { params }: { params: { memberId: string } }
) {
  const { memberId } = params;
  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return NextResponse.json(
      { message: "Invalid Member ID format" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const { error, data } = validateMemberData(formData);
  if (error || !data) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }
  try {
    await connectToMongoDb();
    const member = await Member.findByIdAndUpdate(memberId, data, {
      new: true,
      runValidators: true,
    });

    if (!member) {
      return NextResponse.json(
        { message: "Member not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: " Member Updated successfully", data: member },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to update member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { memberId: string } }
) {
  const { memberId } = params;

  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return NextResponse.json(
      { message: "Invalid member ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();

    const member = await Member.findByIdAndDelete(memberId);
    if (!member) {
      return NextResponse.json(
        { message: "Member not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
