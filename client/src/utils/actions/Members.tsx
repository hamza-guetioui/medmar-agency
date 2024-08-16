"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";

// Get All Members
export const getMembers = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/members`, {
      next: { tags: ["Members"] },
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching members:", message);
      return;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw error;
  }
};

// Get One Member
export const getMember = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/members/${id}`);
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching member:", message);
      return;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching member:", error);
    throw error;
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
