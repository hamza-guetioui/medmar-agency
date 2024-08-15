"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Get All Customers
export const getCustomers = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/customers`, {
      next: { tags: ["Customers"] },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Customers. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    redirect("/404");
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
      console.log(`Failed to create Customers.  ${message}`);
      return;
    }
    console.log("Customer created succesfuly.");
    revalidateTag("Customers");
  } catch (error) {
    console.error("Error creating Customer:", error);
  }
}

// Route /:customerId
// Get One Customer
export const getCustomer = async (customerId: string) => {
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Customer. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Customer:", error);
    throw error;
  }
};

// Update Customer
export async function updateCustomer(customerId: string, formData: FormData) {
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed update customer. Status: ${response.status}`);
    }
    revalidateTag("Customers");
    return;
  } catch (error) {
    console.error("Error updating customer:", error);
  }
}
// Delete Customer
export async function deleteCustomer(formData: FormData) {
  const customerId = formData.get("id");
  try {
    const response = await fetch(`${baseUrl}/api/customers/${customerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const { message } = await response.json();
      console.log(message);
      return;
    }
    console.log("Customer Deleted succesfuly.");
    revalidateTag("Customers");
  } catch (error) {
    console.error("Error Deleting customer:", error);
  }
}
