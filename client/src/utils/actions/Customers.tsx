"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";

// Get All Customers
export const getCustomers = async (searchParams: string = "") => {
  try {
    const response = await fetch(`${baseUrl}/api/customers/${searchParams} `, {
      next: { tags: ["Customers"] },
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching customers:", message);
      return;
    }
    const { data } = await response.json();
    return data;
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

// Get One Customer
export const getCustomer = async (customerId: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      const { message } = await response.json();
      console.error("Error fetching customer:", message);
      return;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching customer:", error);
    throw error;
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
