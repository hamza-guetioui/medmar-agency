"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
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
    throw error;
  }
};

// Get One Customer
export const getCustomer = async (id: string | number | null) => {
  try {
    const response = await fetch(`${baseUrl}/api/customres/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Customer. Status: ${response.status}`);
      // redirect("/admin/dashboard/customers");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Customer:", error);
    throw error;
  }
};

// Create New Customer
export async function createCustomer(formData: FormData) {
  console.log(formData);
  try {
    const response = await fetch(`${baseUrl}/api/customers`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      revalidateTag("Customers");
      redirect("/admin/dashboard/customers");
    } else {
      console.log("Failed to create customer");
    }
  } catch (error) {
    console.error("Error creating Customer:", error);
  }
}
// Update Customer
export async function updateCustomer(formData: FormData) {
  const customerId = formData.get("customerId");
  try {
    const response = await fetch(`${baseUrl}/api/reviews/${customerId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      revalidateTag("Customers");
    } else {
      console.log("Failed to update customer");
    }
  } catch (error) {
    console.error("Error updating customer:", error);
  }
}
// Delete Customer
export async function deleteCustomer(formData: FormData) {
  const customerId = formData.get("customerId");
  try {
    const response = await fetch(`${baseUrl}/api/reviews/${customerId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "DELETE",
    });

    if (response.ok) {
      revalidateTag("Customers");
    } else {
      console.log("Failed to Delete review");
    }
  } catch (error) {
    console.error("Error Deleting review:", error);
  }
}
