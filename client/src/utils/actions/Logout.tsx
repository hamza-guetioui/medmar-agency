"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const logOut = async (formData: FormData) => {
  try {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Failed to logIn, Status: ${response.status}`);
    }
    const { message } = await response.json();
    return message;
  } catch (error) {
    throw error;
  }
};
