import "server-only";

import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { validateMemberData } from "@/utils/apiUtils/validateMemberData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import { getMember } from "@/utils/actions/Members";

export async function GET(
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
    const member = await Member.findById(memberId);

    return NextResponse.json(
      { message: "Member fetched successfully", data: member },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error Fetching member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

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
  const { error, data } = await validateMemberData(formData , memberId);
  if (error || !data) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }
  let member;
  try {
    await connectToMongoDb();
    member = await getMember(memberId);
    if (!member) {
      if (data.profile) await removeFile(data.profile);
      return NextResponse.json(
        { message: "Failed to update, no member found!", data: null },
        { status: 404 }
      );
    }
    const updatedMember = await Member.findByIdAndUpdate(memberId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      throw new Error("something goes wrong");
    }
    if (updatedMember) {
      if (member.profile && updatedMember.profile !== member.profile) {
        await removeFile(member.profile);
      }
    }
    return NextResponse.json(
      { message: " Member Updated successfully", data: updatedMember },
      { status: 200 }
    );
  } catch (err) {
    if (member) {
      if (data.profile && member.profile !== data.profile) {
        await removeFile(data.profile);
      }
    }
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
    if (member.profile) await removeFile(member.profile);

    return NextResponse.json(
      { message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
