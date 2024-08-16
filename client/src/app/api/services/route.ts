import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import Service from "@/model/service";
import { validateServiceData } from "@/utils/apiUtils/validateServiceData";

// Get All | by SearchParams
export async function GET(request: NextRequest) {
  // searchPrams
  try {
    await connectToMongoDb();
    const services = await Service.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Services fetched successfully", data: services },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to fetch services", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Insert New Member
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const { error, data } = await validateServiceData(formData);
  if (error) {
    return NextResponse.json({ message: error, data: null }, { status: 400 });
  }

  try {

    const service = await Service.create(data);
   
    return NextResponse.json(
      { message: "A new service has been successfully added.", data: service },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    removeFile(data.image);
    const { message, error } = handleError("Failed to add a new service", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
