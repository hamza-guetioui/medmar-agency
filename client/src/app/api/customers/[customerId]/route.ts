import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import Project from "@/model/project";
import { validateCustomerData } from "@/utils/apiUtils/validateCustomerData";
import { handleError } from "@/utils/apiUtils/handleError";
import { GetStaticPaths } from "next";



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

  const { error, data } = validateCustomerData(formData);

  if (error || !data) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  try {
    await connectToMongoDb();
    const customer = await Customer.findByIdAndUpdate(customerId, data, {
      new: true,
      runValidators: true,
    });

    if (!customer) {
      return NextResponse.json(
        { message: "Customer not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Customer Updated successfully", data: customer },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to update customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}

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
    return NextResponse.json(
      { message: "Customer deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    const { message, error } = handleError("Failed to delete customer", err);
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
