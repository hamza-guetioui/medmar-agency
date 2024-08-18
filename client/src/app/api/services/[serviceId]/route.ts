import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import Service from "@/model/service";
import { getService } from "@/utils/actions/Services";
import { validateServiceData } from "@/utils/apiUtils/validateServiceData";
import { validate_Id } from "@/utils/apiUtils/validate_Id";

// Get a Service by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;

  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    return NextResponse.json(
      { message: "Invalid service ID format" },
      { status: 400 }
    );
  }

  try {
    await connectToMongoDb();

    // Fetch the service by ID
    const service = await Service.findById(serviceId);

    // Handle case where service is not found
    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Service fetched successfully", data: service },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors during fetch
    const { message, error } = handleError("Error Fetching service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Update a Service by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;

  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    return NextResponse.json(
      { message: "Invalid Service ID format" },
      { status: 400 }
    );
  }

  // Extract and validate form data
  const formData = await request.formData();
  const { error, data } = await validateServiceData(formData, serviceId);

  // Handle validation errors
  if (error || !data) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  let service;
  try {
    await connectToMongoDb();

    // Fetch the existing service
    service = await getService(serviceId);

    // Handle case where service does not exist
    if (!service) {
      if (data.image) await removeFile(data.image); // Remove image if provided
      return NextResponse.json(
        { message: "Failed to update, no service found!", data: null },
        { status: 404 }
      );
    }

    // Update the service
    const updatedService = await Service.findByIdAndUpdate(serviceId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      throw new Error("Something went wrong");
    }

    // Handle file removal if the image has changed
    if (updatedService.image && service.image !== updatedService.image) {
      await removeFile(service.image);
    }

    return NextResponse.json(
      { message: "Service Updated successfully", data: updatedService },
      { status: 200 }
    );
  } catch (err) {
    // Handle errors during update, including file removal if needed
    if (service) {
      if (data.image && service.image !== data.image) {
        await removeFile(data.image);
      }
    }
    const { message, error } = handleError("Failed to update service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Delete a Service by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;

  // Validate the service ID format
  if (!validate_Id(serviceId)) {
    return NextResponse.json(
      { message: "Invalid Service ID format" },
      { status: 400 }
    );
  }

  try {
    await connectToMongoDb();

    // Delete the service by ID
    const service = await Service.findByIdAndDelete(serviceId);

    // Handle case where service is not found
    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    // Remove the service's image if it exists
    if (service.image) await removeFile(service.image);

    return NextResponse.json(
      { message: "Service deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Handle errors during deletion
    const { message, error } = handleError("Failed to delete service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
