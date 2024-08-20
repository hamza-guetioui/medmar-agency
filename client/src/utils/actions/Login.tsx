"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
// import connectMongoDb from "@/libs/mongoDb";

const secretKey = "JWT test"; // Use environment variable for secret key
const user = {
  username: "medlog",
  password: "med!23", // Use hashed passwords in production
};

export const logIn = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");


  if (!username || !password) {
    return { message: "Please provide both username and password." };
  }
  try {
    // Uncomment and use actual user authentication from database
    // const user = await connectMongoDb().collection("users").findOne({ username: username });

    if (username !== user.username && password !== user.password) {
      return { message: "Invalid username or password" };
    }

  
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" }); // Set token expiration
 
    
     // Set the token as a cookie
     cookies().set("session_id", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure the cookie is only sent over HTTPS in production
        maxAge: 3600, // 1 hour expiration
        path: "/", // Make the cookie available across the entire site
      });
  
      // Redirect to the dashboard after successful login
      redirect("/admin/dashboard");
  } catch (error) {
    return { message: "An error occurred while processing your request." };
  }
};
