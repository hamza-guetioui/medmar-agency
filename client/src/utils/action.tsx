"use server";

const apiUrl = process.env.API_URL;

import { revalidateTag } from "next/cache";

export const getReviews = async () => {
  "use server";
  try {
    const response = await fetch(`${apiUrl}/reviews`, {
      next: { tags: ["Reviews"] },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getReview = async (id: string | number | null) => {
  "use server";
  try {
    const response = await fetch(`${apiUrl}/reviews?id=${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export async function createReview(formData: FormData) {
  "use server";
  try {
    const response = await fetch(`${apiUrl}/reviews`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Review created successfully");
      revalidateTag("Reviews");
    } else {
      console.log("Failed to create review");
    }
  } catch (error) {
    console.error("Error creating Review:", error);
  }
}

export async function updateReview(formData: FormData) {
  "use server";
  const reviewId = formData.get("reviewId");
  try {
    const response = await fetch(`${apiUrl}/reviews?id=${reviewId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });

    if (response.ok) {
      console.log("review updated successfully");
      revalidateTag("Reviews");
    } else {
      console.log("Failed to update review");
    }
  } catch (error) {
    console.error("Error updating review:", error);
  }
}

export async function deleteReview(formData: FormData) {
  "use server";
  const reviewId = formData.get("reviewId");
  try {
    const response = await fetch(`${apiUrl}/reviews?id=${reviewId}`, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
      method: "DELETE",
    });

    if (response.ok) {
      console.log("review Deleted successfully");
      revalidateTag("Reviews");
    } else {
      console.log("Failed to Delete review");
    }
  } catch (error) {
    console.error("Error Deleting review:", error);
  }
}

export const getWorks = async () => {
  try {
    const response = await fetch(`${apiUrl}/works`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
