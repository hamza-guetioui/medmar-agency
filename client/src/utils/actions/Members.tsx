"use server";

import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { IMember } from "@/Types";
import { revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";
import { validateMemberData } from "../apiUtils/validateMemberData";
import { removeFile } from "../apiUtils/handleFile";

// Get All Members
export const getMembers = async () => {
  "use server"

  try {
    await connectToMongoDb();
    const members = await Member.find().sort({ createdAt: -1 }).lean();

    // Map and type the results to IMember
    return members.map((member: any) => ({
      _id: member._id,
      fullName: member.fullName,
      position: member.position,
      profile: member.profile,
      bio: member.bio,
      facebook: member.facebook,
      instagram: member.instagram,
      linkedin: member.linkedin,
    })) as IMember[];
  } catch (err) {
    console.error(err);
  }
};

// Get One Member
export const getMember = async (memberId: string) => {
  "use server"

  if (!validate_Id(memberId)) {
    throw new Error("Invalid member ID format");
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Find the member by ID
    const member = await Member.findById(memberId);

    // Return the member data if found
    return member;
  } catch (err) {
    console.log(err);
  }
};

// Create New Member
export async function createMember(formData: FormData) {
   "use server"
  // Validate the form data and extract member data
  const { error, data } = await validateMemberData(formData);
  if (error) {
    // Return an error response if validation fails
    return { message: error };
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Create a new member record in the database
    await Member.create(data);
    revalidateTag("Members");
    // Return a success response with the newly created member data
    console.log('created');
    return { message: "A new member has been successfully added." };
  } catch (err) {
    console.log(err);
    // If an error occurs, remove the uploaded profile file to prevent orphaned files
    removeFile(data.profile);

    // Handle any errors that occur during the create operation
    return { messager: "Failed to add a new member" };
  }
}

// Update Member
export async function updateMember(memberId: string, formData: FormData) {
   "use server"
  // Validate the member ID format
  if (!validate_Id(memberId)) {
    return { message: "Invalid Member ID format" };
  }

  // Extract form data from the request

  const { error, data } = await validateMemberData(formData, memberId);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return { message: error };
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
      return { message: "Failed to update, no member found!" };
    }

    // Update the member record in the database with the validated data
    const updatedMember = await Member.findByIdAndUpdate(memberId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      return { message: "something goes wrong" };
    }

    // Remove old profile file if it has been replaced
    if (updatedMember.profile && updatedMember.profile !== member.profile) {
      await removeFile(member.profile);
    }

    revalidateTag("Members");
    // Return a successful response with the updated member data
    return { message: "Member Updated successfully", data: updatedMember };
  } catch (err) {
    // If an error occurs during the update process, remove any uploaded profile file to prevent orphaned files
    if (member) {
      if (data.profile && member.profile !== data.profile) {
        await removeFile(data.profile);
      }
    }

    // Handle any errors that occur during the update operation

    return { message: "Failed to update member" };
  }
}

// Delete Member
export async function deleteMember(formData: FormData) {
    "use server"
  const memberId = formData.get("id") as string;
  // Validate the member ID format
  if (!validate_Id(memberId)) {
    return { message: "Invalid member ID format" };
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Delete the member record from the database
    const member = await Member.findByIdAndDelete(memberId);
    if (!member) {
      return { message: "Member not found" };
    }

    // Remove associated profile file if it exists
    if (member.profile) await removeFile(member.profile);
    revalidateTag("Members");
    // Return a successful response
    return { message: "Member deleted successfully" };
  } catch (err) {
    // Handle any errors that occur during the delete operation
    return { message: "Failed to delete member" };
  }
}
