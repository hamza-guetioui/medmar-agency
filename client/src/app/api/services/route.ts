import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import Service from "@/model/service";
import { validateServiceData } from "@/utils/apiUtils/validateServiceData";

// Get All Services | by SearchParams
export async function GET(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Fetch all services, sorted by creation date in descending order
    const services = await Service.find().sort({ createdAt: -1 });

    // Respond with the list of services
    return NextResponse.json(
      { message: "Services fetched successfully", data: services },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors during fetching
    const { message, error } = handleError("Failed to fetch services", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Create Service
export async function POST(request: NextRequest) {
  // Extract form data from the request
  const formData = await request.formData();

  // Validate the service data
  const { error, data } = await validateServiceData(formData);
  if (error) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Create a new service
    const service = await Service.create(data);

    // Respond with the newly created service
    return NextResponse.json(
      { message: "A new service has been successfully added.", data: service },
      { status: 201 }
    );
  } catch (err) {
    // Remove the image file if there was an error
    if (data.image) {
      await removeFile(data.image);
    }

    // Handle any errors during creation
    const { message, error } = handleError("Failed to add a new service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
