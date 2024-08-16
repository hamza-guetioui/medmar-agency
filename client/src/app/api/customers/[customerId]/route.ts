import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import Project from "@/model/project";
import { validateCustomerData } from "@/utils/apiUtils/validateCustomerData";
import { handleError } from "@/utils/apiUtils/handleError";
import { removeFile } from "@/utils/apiUtils/handleFile";

// Get Customer
export async function GET(
  request: NextRequest,
  { params }: { params: { customerId: string } }
) {
  const { customerId } = params;

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }
  try {
    await connectToMongoDb();
    const customer = await Customer.findById(customerId);

    return NextResponse.json(
      { message: "Customer fetched successfully", data: customer },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Error Fetching Customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

// Edit Customer
export async function PUT(
  request: NextRequest,
  { params }: { params: { customerId: string } }
) {
  const { customerId } = params;
  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const { error, data } = await validateCustomerData(formData, customerId);
  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
  let customer;
  try {
    await connectToMongoDb();

    customer = await Customer.findById(customerId);
    if (!customer) {
      // If no customer is found, remove any uploaded files that were provided
      if (data.avatar) removeFile(data.avatar);
      if (data.businessLogo) removeFile(data.businessLogo);
      return NextResponse.json(
        { message: "Failed to update, no customer found!", data: null },
        { status: 404 }
      );
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedCustomer) {
      throw new Error("something goes wrong");
    }
    if (updatedCustomer) {
      if (customer.avatar && updatedCustomer.avatar !== customer.avatar) {
        await removeFile(customer.avatar);
      }
      if (customer.businessLogo && updatedCustomer.businessLogo !== customer.businessLogo) {
        await removeFile(customer.businessLogo);
      }
    }

    return NextResponse.json(
      { message: "Customer Updated successfully", data: updatedCustomer },
      { status: 200 }
    );
  } catch (err) {
    if (customer) {
      if (data.avatar && customer.avatar !== data.avatar) {
        await removeFile(data.avatar);
      }
      if (data.businessLogo && customer.businessLogo !== data.businessLogo) {
        await removeFile(data.businessLogo);
      }
    }
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

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return NextResponse.json(
      { message: "Invalid customer ID format" },
      { status: 400 }
    );
  }
 

  try {
    await connectToMongoDb();
    const project = await Project.find({ customerId });
    if (project.length >= 1) {
      return NextResponse.json(
        { message: "Customer has projects, cannot be deleted" },
        { status: 400 }
      );
    }

    const customer = await Customer.findByIdAndDelete(customerId);

    if (!customer) {
      return NextResponse.json(
        { message: "Customer not found" },
        { status: 404 }
      );
    }

    if (customer.avatar) await removeFile(customer.avatar);
    if (customer.businessLogo) await removeFile(customer.businessLogo);

    return NextResponse.json(
      { message: "Customer deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
