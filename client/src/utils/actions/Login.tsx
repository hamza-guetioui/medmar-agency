"use server"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logIn = async (formData: {
  username: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.error("Failed to log in:", response.statusText);
      redirect("/admin");
      return;
    }
    const { token } = await response.json();
    cookies().set("session_id", token);
    redirect("/admin/dashboard");
    return;
  } catch (error) {
    throw error;
  }
};
