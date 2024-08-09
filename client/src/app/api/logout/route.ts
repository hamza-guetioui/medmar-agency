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
    return NextResponse.json(
      { message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
