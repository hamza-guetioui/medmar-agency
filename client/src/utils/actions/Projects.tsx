"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Get All Projects
export const getProjects = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/projects`, {
      next: { tags: ["Projects"] },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Projects. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id: string | number | null) => {
  try {
    const response = await fetch(`${baseUrl}/api/reviews?id=${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Review. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export async function createProject(formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/reviews`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Review created successfully");
      revalidateTag("Reviews");
      redirect("/admin/dashboard/reviews");
    } else {
      console.log("Failed to create review");
    }
  } catch (error) {
    console.error("Error creating Review:", error);
  }
}

export async function updateProject(formData: FormData) {
  const reviewId = formData.get("reviewId");
  try {
    const response = await fetch(`${baseUrl}/api/reviews?id=${reviewId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      console.log("review updated successfully");
      revalidateTag("Reviews");
    } else {
      console.log("Failed to update review");
    }
  } catch (error) {
    console.error("Error updating review:", error);
  }
}

export async function deleteProject(formData: FormData) {
  const reviewId = formData.get("reviewId");
  try {
    const response = await fetch(`${baseUrl}/api/reviews?id=${reviewId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "DELETE",
    });

    if (response.ok) {
      console.log("review Deleted successfully");
      revalidateTag("Reviews");
    } else {
      console.log("Failed to Delete review");
    }
  } catch (error) {
    console.error("Error Deleting review:", error);
  }
}
