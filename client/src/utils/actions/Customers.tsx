"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import { ICustomer } from "@/Types";
import { revalidateTag } from "next/cache";
import { validate_Id } from "../apiUtils/validate_Id";

// Get All Customers
export const getCustomers = async (fullName: string = "") => {
  let searchParams = {};
  if (fullName) {
    searchParams = { fullName: { $regex: `^${fullName}`, $options: "i" } }; // Case-insensitive match that starts with fullName
  }

  try {
    await connectToMongoDb();
    const customers = await Customer.find(searchParams)
      .sort({ createdAt: -1 })
      .lean();

    // Return a successful response with the fetched customers
    return customers.map((customer: any) => ({
      _id: customer._id,
      fullName: customer.fullName,
      jobTitle: customer.jobTitle,
      email: customer.email,
      phone: customer.phone,
      avatar: customer.avatar,
      testimonial: customer.testimonial,
      rating: customer.rating,
      businessLogo: customer.businessLogo,
      published: customer.published,
    })) as ICustomer[];
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// Create New Customer
export async function createCustomer(formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/customers`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to create customer: ${message}`);
      return;
    }
    console.log("Customer created successfully.");
    revalidateTag("Customers");
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
}

export const getCustomer = async (customerId: string) => {
  // Validate the customer ID format
  if (!validate_Id(customerId)) {
    throw new Error("Invalid customer ID format");
  }

  try {
    // Connect to MongoDB
    await connectToMongoDb();

    // Find the customer by ID
    const customer = await Customer.findById(customerId);

    // Return the customer data if found
    return customer;
  } catch (err) {
    console.log(err);
  }
};

// Update Customer
export async function updateCustomer(customerId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      method: "PUT",
      body: formData,
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to update customer: ${message}`);
      return;
    }
    console.log("Customer updated successfully.");
    revalidateTag("Customers");
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
}

// Delete Customer
export async function deleteCustomer(formData: FormData) {
  const customerId = formData.get("id") as string;
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error(`Failed to delete customer: ${message}`);
      return;
    }
    console.log("Customer deleted successfully.");
    revalidateTag("Customers");
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
}
