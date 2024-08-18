import "server-only";
import { NextResponse, type NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  try {

    const response = NextResponse.json(
      { message: "log out  successfully" },
      { status: 200 }
    );
    response.cookies.delete("session_id");

    return response;

  } catch (error) {
    // const { message, error } = handleError( "Failed to fetch members", err);
    // return NextResponse.json({ message, error }, { status: 500 });

    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
