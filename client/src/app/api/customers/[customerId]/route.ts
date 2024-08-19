import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import Project from "@/model/project";
import { validateCustomerData } from "@/utils/apiUtils/validateCustomerData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";
import { validate_Id } from "@/utils/apiUtils/validate_Id";
import { ICustomer } from "@/Types";


// // Get Customer
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { customerId: string } }
// ) {
//   const { customerId } = params;

//   // Validate the customer ID format
//   if (!validate_Id(customerId)) {
//     return NextResponse.json(
//       { message: "Invalid customer ID format" },
//       { status: 400 }
//     );
//   }

//   try {
//     // Connect to MongoDB
//     await connectToMongoDb();

//     // Find the customer by ID
//     const customer = await Customer.findById(customerId);

//     // Return the customer data if found
//     return NextResponse.json(
//       { message: "Customer fetched successfully", data: customer },
//       { status: 200 }
//     );
//   } catch (err) {
//     // Handle any errors that occur during the fetch operation
//     const { message, error } = handleError("Error Fetching Customer", err);
//     return NextResponse.json({ message, error }, { status: 500 });
//   }
// }

// Edit Customer
export async function PUT(
  request: NextRequest,
  { params }: { params: { customerId: string } }
) {
  const { customerId } = params;

  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }

  // Extract form data from the request
  const formData = await request.formData();
  const { error, data } = await validateCustomerData(formData, customerId);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  let customer;
  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Find the existing customer by ID
    customer = await Customer.findById(customerId);
    if (!customer) {
      // If no customer is found, remove any uploaded files that were provided
      if (data.avatar) await removeFile(data.avatar);
      if (data.businessLogo) await removeFile(data.businessLogo);
      return NextResponse.json(
        { message: "Failed to update, no customer found!", data: null },
        { status: 404 }
      );
    }

    // Update the customer record in the database with the validated data
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedCustomer) {
      throw new Error("something goes wrong");
    }

    // Remove old files if they have been replaced
    if (updatedCustomer.avatar && updatedCustomer.avatar !== customer.avatar) {
      await removeFile(customer.avatar);
    }
    if (
      updatedCustomer.businessLogo &&
      updatedCustomer.businessLogo !== customer.businessLogo
    ) {
      await removeFile(customer.businessLogo);
    }

    // Return a successful response with the updated customer data
    return NextResponse.json(
      { message: "Customer Updated successfully", data: updatedCustomer },
      { status: 200 }
    );
  } catch (err) {
    // If an error occurs during the update process, remove any uploaded files to prevent orphaned files
    if (customer) {
      if (data.avatar && customer.avatar !== data.avatar) {
        await removeFile(data.avatar);
      }
      if (data.businessLogo && customer.businessLogo !== data.businessLogo) {
        await removeFile(data.businessLogo);
      }
    }

    // Handle any errors that occur during the update operation
    const { message, error } = handleError("Failed to update customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Delete Customer
export async function DELETE(
  request: NextRequest,
  { params }: { params: { customerId: string } }
) {
  const { customerId } = params;

  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Check if the customer has associated projects
    const project = await Project.find({ customerId });
    if (project.length >= 1) {
      return NextResponse.json(
        { message: "Customer has projects, cannot be deleted" },
        { status: 400 }
      );
    }

    // Delete the customer record from the database
    const customer = await Customer.findByIdAndDelete(customerId);

    if (!customer) {
      return NextResponse.json(
        { message: "Customer not found" },
        { status: 404 }
      );
    }

    // Remove associated files if they exist
    if (customer.avatar) await removeFile(customer.avatar);
    if (customer.businessLogo) await removeFile(customer.businessLogo);

    // Return a successful response
    return NextResponse.json(
      { message: "Customer deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    // Handle any errors that occur during the delete operation
    const { message, error } = handleError("Failed to delete customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
