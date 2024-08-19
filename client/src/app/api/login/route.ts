import "server-only";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
// import connectMongoDb from "@/libs/mongoDb";

const secretKey = "JWT test"; // Use environment variable for secret key
const user = {
  username: "admin",
  password: "12345", // Use hashed passwords in production
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;
    
    if (!username || !password) {
      return NextResponse.json(
        { message: "Please provide both username and password." },
        { status: 400 }
      );
    }
    
    // Uncomment and use actual user authentication from database
    // const user = await connectMongoDb().collection("users").findOne({ username: username });

    if (username === user.username && password === user.password) {
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' }); // Set token expiration

      const response = NextResponse.json(
        { message: "Logged in successfully" , token  },
        { status: 200 }
      );
      // response.cookies.set("session_id", token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      //   sameSite: "strict",
      //   path: "/"
      // });

      return response;
    }

    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  } catch (error) {
    // const { message, error } = handleError( "Failed to fetch members", err);
    // return NextResponse.json({ message, error }, { status: 500 });

    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
