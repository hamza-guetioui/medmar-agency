import "server-only";

import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { validateMemberData } from "@/utils/apiUtils/validateMemberData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import { getMember } from "@/utils/actions/Members";
import { validate_Id } from "@/utils/apiUtils/validate_Id";
import { IMember } from "@/Types";


// Get Member
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { memberId: string } }
// ) {
//   const { memberId } = params;

//   // Validate the member ID format
//   if (!validate_Id(memberId)) {
//     return NextResponse.json(
//       { message: "Invalid member ID format" },
//       { status: 400 }
//     );
//   }

//   try {
//     // Connect to MongoDB
//     await connectToMongoDb();

//     // Find the member by ID
//     const member = await Member.findById(memberId);

//     // Return the member data if found
//     return NextResponse.json(
//       { message: "Member fetched successfully", data: member },
//       { status: 200 }
//     );
//   } catch (err) {
//     // Handle any errors that occur during the fetch operation
//     const { message, error } = handleError("Error Fetching member", err);
//     return NextResponse.json({ message, error }, { status: 500 });
//   }
// }

// Edit Member
export async function PUT(
  request: NextRequest,
  { params }: { params: { memberId: string } }
) {
  const { memberId } = params;

  // Validate the member ID format
  if (!validate_Id(memberId)) {
    return NextResponse.json(
      { message: "Invalid Member ID format" },
      { status: 400 }
    );
  }

  // Extract form data from the request
  const formData = await request.formData();
  const { error, data } = await validateMemberData(formData, memberId);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  let member;
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Retrieve the current member data
    member = await getMember(memberId);
    if (!member) {
      // If no member is found, remove any uploaded profile file
      if (data.profile) await removeFile(data.profile);
      return NextResponse.json(
        { message: "Failed to update, no member found!", data: null },
        { status: 404 }
      );
    }

    // Update the member record in the database with the validated data
    const updatedMember = await Member.findByIdAndUpdate(memberId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      throw new Error("something goes wrong");
    }

    // Remove old profile file if it has been replaced
    if (updatedMember.profile && updatedMember.profile !== member.profile) {
      await removeFile(member.profile);
    }

    // Return a successful response with the updated member data
    return NextResponse.json(
      { message: "Member Updated successfully", data: updatedMember },
      { status: 200 }
    );
  } catch (err) {
    // If an error occurs during the update process, remove any uploaded profile file to prevent orphaned files
    if (member) {
      if (data.profile && member.profile !== data.profile) {
        await removeFile(data.profile);
      }
    }

    // Handle any errors that occur during the update operation
    const { message, error } = handleError("Failed to update member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Delete Member
export async function DELETE(
  request: NextRequest,
  { params }: { params: { memberId: string } }
) {
  const { memberId } = params;

  // Validate the member ID format
  if (!validate_Id(memberId)) {
    return NextResponse.json(
      { message: "Invalid member ID format" },
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Delete the member record from the database
    const member = await Member.findByIdAndDelete(memberId);
    if (!member) {
      return NextResponse.json(
        { message: "Member not found" },
        { status: 404 }
      );
    }

    // Remove associated profile file if it exists
    if (member.profile) await removeFile(member.profile);

    // Return a successful response
    return NextResponse.json(
      { message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors that occur during the delete operation
    const { message, error } = handleError("Failed to delete member", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
