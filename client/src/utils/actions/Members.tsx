"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { IMember } from "@/Types";
import { revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";
import { error } from "console";

// Get All Members
export const getMembers = async () => {
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
  try {
    const response = await fetch(`${baseUrl}/api/members`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to create member: ${message}`);
      return;
    }
    console.log("Member created successfully");
    revalidateTag("Members");
  } catch (error) {
    console.error("Error creating member:", error);
    throw error;
  }
}

// Update Member
export async function updateMember(memberId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/members/${memberId}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to update member: ${message}`);
      return;
    }
    console.log("Member updated successfully");
    revalidateTag("Members");
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
}

// Delete Member
export async function deleteMember(formData: FormData) {
  const memberId = formData.get("id") as string;
  try {
    const response = await fetch(`${baseUrl}/api/members/${memberId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to delete member: ${message}`);
      return;
    }
    console.log("Member deleted successfully");
    revalidateTag("Members");
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
}
