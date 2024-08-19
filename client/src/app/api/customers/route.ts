import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import { validateCustomerData } from "@/utils/apiUtils/validateCustomerData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get All Customers | filtered by SearchParams
export async function GET(request: NextRequest) {
  let searchParams = {};
  const fullName = request.nextUrl.searchParams.get("customerFullName");
  
  // If a 'customerFullName' search parameter is provided, add it to searchParams with a regex for case-insensitive matching
  if (fullName) {
    searchParams = { fullName: { $regex: `^${fullName}`, $options: "i" } }; // Case-insensitive match that starts with fullName
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Fetch customers from the database, filtered by searchParams, and sorted by creation date in descending order
    const customers = await Customer.find(searchParams).sort({ createdAt: -1 });

    // Return a successful response with the fetched customers
    return NextResponse.json(
      { message: "Customers fetched successfully", data: customers },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors that occur during the fetch operation
    const { message, error } = handleError("Error Fetching Customers", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Create New 
export async function POST(request: NextRequest) {
  // Extract form data from the request
  const formData = await request.formData();
  
  // Validate the form data and prepare it for insertion
  const { error, data } = await validateCustomerData(formData);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Create a new customer record in the database with the validated data
    const customer = await Customer.create(data);

    // Return a successful response with the created customer data
    return NextResponse.json(
      {
        message: "A new customer has been successfully added.",
        data: customer,
      },
      { status: 201 }
    );
  } catch (err) {
    // If an error occurs during the database operation, remove any uploaded files to prevent orphaned files
    await removeFile(data?.avatar);
    await removeFile(data?.businessLogo);

    // Handle any errors that occur during the creation process
    const { message, error } = handleError("Failed to add new customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
