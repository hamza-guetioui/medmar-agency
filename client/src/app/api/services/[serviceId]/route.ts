import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import Service from "@/model/service";
import { getService } from "@/utils/actions/Services";
import { validateServiceData } from "@/utils/apiUtils/validateServiceData";

export async function GET(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    return NextResponse.json(
      { message: "Invalid service ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();
    const service = await Service.findById(serviceId);

    return NextResponse.json(
      { message: "Service fetched successfully", data: service },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error Fetching service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;
  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    return NextResponse.json(
      { message: "Invalid Service ID format" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const { error, data } = await validateServiceData(formData , serviceId);
  if (error || !data) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }
  let service;
  try {
    await connectToMongoDb();
    service = await getService(serviceId);
    if (!service) {
      if (data.image) await removeFile(data.image);
      return NextResponse.json(
        { message: "Failed to update, no service found!", data: null },
        { status: 404 }
      );
    }
    const updatedService = await Service.findByIdAndUpdate(serviceId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      throw new Error("something goes wrong");
    }
    if (updatedService) {
      if (service.image && updatedService.image !== service.image) {
        await removeFile(service.image);
      }
    }
    return NextResponse.json(
      { message: " Service Updated successfully", data: updatedService },
      { status: 200 }
    );
  } catch (err) {
    if (service) {
      if (data.image && service.image !== data.image) {
        await removeFile(data.image);
      }
    }
    const { message, error } = handleError("Failed to update service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { serviceId: string } }
) {
  const { serviceId } = params;

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    return NextResponse.json(
      { message: "Invalid Service ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();

    const service = await Service.findByIdAndDelete(serviceId);
    if (!service) {
      return NextResponse.json(
        { message: "service not found" },
        { status: 404 }
      );
    }
    if (service.image) await removeFile(service.image);

    return NextResponse.json(
      { message: "service deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
