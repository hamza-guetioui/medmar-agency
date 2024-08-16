import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import { validateCustomerData } from "@/utils/apiUtils/validateCustomerData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get All Customer | filtered by SearchParams
export async function GET(request: NextRequest) {
  let searchParams = {};
  const fullName = request.nextUrl.searchParams.get("customerFullName");
  if (fullName) {
    searchParams = { fullName: { $regex: `^${fullName}`, $options: "i" } }; // Case-insensitive match that starts with fullName
  }

  try {
    await connectToMongoDb();
    const customers = await Customer.find(searchParams).sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Customers fetched successfully", data: customers },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error Fetching Customers", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Insert New Customer
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const { error, data } = await validateCustomerData(formData);

  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  try {
    await connectToMongoDb();
    const customer = await Customer.create(data);

    return NextResponse.json(
      {
        message: "A new customer has been successfully added.",
        data: customer,
      },
      { status: 201 }
    );
  } catch (err) {
    await removeFile(data?.avatar);
    await removeFile(data?.businessLogo);

    const { message, error } = handleError("Failed to add new customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
