"use server";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import { ICustomer } from "@/Types";
import { revalidatePath, revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";
import { validateCustomerData } from "../apiUtils/validateCustomerData";
import { removeFile } from "../apiUtils/handleFile";
import Project from "@/model/project";

// Get All Customers
export const getCustomers = async (fullName: string = "") => {
  "use server";
  let searchParams = {};
  if (fullName) {
    searchParams = { fullName: { $regex: `^${fullName}`, $options: "i" } }; // Case-insensitive match that starts with fullName
  }

  try {
    await connectToMongoDb();
    let customers: ICustomer[] = await Customer.find(searchParams)
      .sort({ createdAt: -1 })
      .select("-createdAt -updatedAt -__v")
      .lean();

    customers = customers.map((customer) => ({
      ...customer,
      _id: customer._id.toString(), // Convert ObjectId to string
    }));
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// Create New Customer
export async function createCustomer(formData: FormData) {
  "use server";
  // Validate the form data and prepare it for insertion
  const { error, data } = await validateCustomerData(formData);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return { message: error };
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Create a new customer record in the database with the validated data
    await Customer.create(data);
    revalidatePath("/customers");
    console.log("created");
    // Return a successful response with the created customer data
    return {
      message: "A new customer has been successfully added.",
    };
  } catch (err) {
    // If an error occurs during the database operation, remove any uploaded files to prevent orphaned files
    await removeFile(data?.avatar);
    await removeFile(data?.businessLogo);
    console.log(err);
    return { message: "Failed to add new customer" };
  }
}

export const getCustomer = async (customerId: string) => {
  "use server";

  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    throw new Error("Invalid customer ID format");
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Find the customer by ID
    const customer = await Customer.findById(customerId)
      .select("-createdAt -updatedAt -__v")
      .lean();

    if (!customer) {
      throw new Error("Customer not found");
    }

    // Return the customer data if found
    return customer as ICustomer;
  } catch (err) {
    console.log(err);
  }
};

// Update Customer
export async function updateCustomer(customerId: string, formData: FormData) {
  "use server";
  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    return { message: "Invalid customer ID format" };
  }

  // Extract form data from the request
  const { error, data } = await validateCustomerData(formData, customerId);

  // If validation fails, return a 400 Bad Request response with the error message
  if (error || !data) {
    return { message: error };
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
      return { message: "Failed to update, no customer found!" };
    }

    // Update the customer record in the database with the validated data
    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedCustomer) {
      return { message: "something goes wrong" };
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
    revalidateTag("/admin/dashboard/customers");

    // Return a successful response with the updated customer data
    return { message: "Customer Updated successfully" };
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
    return { message: "Failed to update customer" };
  }
}

// Delete Customer
export async function deleteCustomer(formData: FormData) {
  "use server";
  const customerId = formData.get("id")?.toString() as string;
  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    return { message: "Invalid customer ID format" };
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Check if the customer has associated projects
    const project = await Project.find({ customerId });
    if (project.length >= 1) {
      return { message: "Customer has projects, cannot be deleted" };
    }

    // Delete the customer record from the database
    const customer = await Customer.findByIdAndDelete(customerId);

    if (!customer) {
      return { message: "No Customer found to delete!" };
    }

    // Remove associated files if they exist
    if (customer.avatar) await removeFile(customer.avatar);
    if (customer.businessLogo) await removeFile(customer.businessLogo);
    revalidateTag("Customers");

    // Return a successful response
    return { message: "Customer deleted successfully" };
  } catch (err) {
    // Handle any errors that occur during the delete operation
    return { message: "Failed to delete customer" };
  }
}
