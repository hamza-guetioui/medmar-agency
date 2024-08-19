"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import connectToMongoDb from "@/libs/mongoDb";
import Service from "@/model/service";
import { IService } from "@/Types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { validate_Id } from "../apiUtils/validate_Id";

// Get All Services
export const getServices = async () => {
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Fetch all services, sorted by creation date in descending order
    const services = await Service.find().sort({ createdAt: -1 }).lean();

    // Respond with the list of services
    return services.map((service: any) => ({
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image,
      link: service.link,
      details: service.details.map((detail: any) => ({
        _id: detail._id,
        detail: detail.detail,
      })),
    })) as IService[];
  } catch (err) {
    console.log(err);
  }
};

// Get One Service
export const getService = async (serviceId: string) => {
  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    throw new Error("Invalid service ID format");
  }

  try {
    await connectToMongoDb();

    // Fetch the service by ID
    const service = await Service.findById(serviceId);

    // // Handle case where service is not found
    // if (!service) {
    //   return NextResponse.json(
    //     { message: "Service not found" },
    //     { status: 404 }
    //   );
    // }

    return service;
  } catch (err) {
    // Handle any errors during fetch
    console.log(err);
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
      return;
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
