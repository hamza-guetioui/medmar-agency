"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logOut = async () => {
  try {
    // Delete the session cookie
    cookies().delete("session_id");

    // Perform the redirection
    redirect("/admin");
  } catch (error) {
    console.error("Logout error:", error);
    return { message: "An error occurred while logging out." };
  }
};
