"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Get All Services
export const getServices = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/services`, {
      next: { tags: ["Services"] },
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching services:", message);
      throw new Error(message); // Ensure that errors are propagated
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error; // Ensure that errors are propagated
  }
};

// Get One Service
export const getService = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/services/${id}`);
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching service:", message);
      throw new Error(message); // Ensure that errors are propagated
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error; // Ensure that errors are propagated
  }
};

// Create New Service
export async function createService(formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/services`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to create service: ${message}`);
      return
    }
    console.log("Service created successfully");
    revalidateTag("Services");
  } catch (error) {
    console.error("Error creating service:", error);
    throw error; // Ensure that errors are propagated
  }
}

// Update Service
export async function updateService(serviceId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/services/${serviceId}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to update service: ${message}`);
      throw new Error(message); // Ensure that errors are propagated
    }
    console.log("Service updated successfully");
    revalidateTag("Services");
  } catch (error) {
    console.error("Error updating service:", error);
    throw error; // Ensure that errors are propagated
  }
}

// Delete Member
export async function deleteService(formData: FormData) {
  const serviceId = formData.get("id") as string;
  try {
    const response = await fetch(`${baseUrl}/api/services/${serviceId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to delete member: ${message}`);
      return;
    }
    console.log("Service deleted successfully");
    revalidateTag("Services");
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
}

// Delete Service
// export async function deleteService(serviceId: string) {
//   try {
//     const response = await fetch(`${baseUrl}/api/services/${serviceId}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       const { message } = await response.json();
//       console.error(`Failed to delete service: ${message}`);
//       throw new Error(message); // Ensure that errors are propagated
//     }
//     console.log("Service deleted successfully");
//     revalidateTag("Services");
//   } catch (error) {
//     console.error("Error deleting service:", error);
//     throw error; // Ensure that errors are propagated
//   }
// }

