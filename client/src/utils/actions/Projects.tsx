"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";

// Get All Projects
export const getProjects = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/projects`, {
      next: { tags: ["Projects"] },
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching projects:", message);
      return;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getProject = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/projects/${id}`);
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching project:", message);
      return;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

export async function createProject(formData: FormData) {

  try {
    const response = await fetch(`${baseUrl}/api/projects`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error creating project:", message);
      return;
    }
    console.log("Project created successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function updateProject(projectId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/projects/${projectId}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error updating project:", message);
      return;
    }
    console.log("Project updated successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(formData: FormData) {
  const projectId = formData.get("projectId") as string;
  try {
    const response = await fetch(`${baseUrl}/api/projects/${projectId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error deleting project:", message);
      return;
    }
    console.log("Project deleted successfully");
    revalidateTag("Projects");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
