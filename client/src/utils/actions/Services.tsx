"use server";
import connectToMongoDb from "@/libs/mongoDb";
import Service from "@/model/service";
import { IService } from "@/Types";
import { revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";
import { validateServiceData } from "../apiUtils/validateServiceData";
import { removeFile } from "../apiUtils/handleFile";

// Get All Services
export const getServices = async () => {
  "use server";
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Fetch all services, sorted by creation date in descending order
    const services = await Service.find().sort({ createdAt: -1 }).lean();

    // Convert the data into plain objects
    return services.map((service: any) => ({
      _id: service._id.toString(), // Convert ObjectId to string
      title: service.title,
      description: service.description,
      image: service.image,
      link: service.link,
      details: service.details.map((detail: any) => ({
        _id: detail._id.toString(), // Convert ObjectId to string
        detail: detail.detail,
      })),
    })) as IService[];
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch services');
  }
};

// Get One Service
export const getService = async (serviceId: string) => {
  "use server";

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

    return {
      _id: service._id,
      title: service.title,
      description: service.description,
      image: service.image,
      link: service.link,
      details: service.details.map((detail: any) => ({
        _id: detail._id.toString(),
        detail: detail.detail,
      })),
    } as IService;
  } catch (err) {
    // Handle any errors during fetch
    console.log(err);
  }
};

// Create New Service
export async function createService(formData: FormData) {
  "use server";
  // Validate the service data
  const { error, data } = await validateServiceData(formData);
  if (error) {
    return { message: error };
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();
    console.log("created");
    // Create a new service
    Service.create(data);
    revalidateTag("Services");
    // Respond with the newly created service
    return { message: "A new service has been successfully added." };
  } catch (err) {
    // Remove the image file if there was an error
    if (data.image) {
      await removeFile(data.image);
    }
    console.log(err);

    // Handle any errors during creation
    return { message: "Failed to add a new service" };
  }
}

// Update Service
export async function updateService(serviceId: string, formData: FormData) {
  "use server";
  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    return { message: "Invalid Service ID format" };
  }

  // Extract and validate form data
  const { error, data } = await validateServiceData(formData, serviceId);

  // Handle validation errors
  if (error || !data) {
    return { message: error };
  }

  let service;
  try {
    await connectToMongoDb();

    // Fetch the existing service
    service = await getService(serviceId);

    // Handle case where service does not exist
    if (!service) {
      if (data.image) await removeFile(data.image); // Remove image if provided
      return { message: "Failed to update, no service found!" };
    }

    // Update the service
    const updatedService = await Service.findByIdAndUpdate(serviceId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      return { message: "Something went wrong" };
    }

    // Handle file removal if the image has changed
    if (updatedService.image && service.image !== updatedService.image) {
      await removeFile(service.image);
    }

    revalidateTag("Services");
    return { message: "Service Updated successfully" };
  } catch (err) {
    // Handle errors during update, including file removal if needed
    if (service) {
      if (data.image && service.image !== data.image) {
        await removeFile(data.image);
      }
    }
    return { message: "Failed to update service" };
  }
}

// Delete Member
export async function deleteService(formData: FormData) {
  "use server";

  const serviceId = formData.get("id") as string;
  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    return { message: "Invalid Service ID format" };
  }

  try {
    await connectToMongoDb();

    // Delete the service by ID
    const service = await Service.findByIdAndDelete(serviceId);

    // Handle case where service is not found
    if (!service) {
      return { message: "Service not found" };
    }

    // Remove the service's image if it exists
    if (service.image) await removeFile(service.image);
    revalidateTag("Services");
    return { message: "Service deleted successfully" };
  } catch (err) {
    // Handle errors during deletion
    return { message: "Failed to delete service" };
  }
}
