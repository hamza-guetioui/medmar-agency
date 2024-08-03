import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: 200,
    message: "Hello, World!",
  });
}

export function Post(request : Request) {
  return NextResponse.json({
    status: 200,
    message: "Hello, World!",
  });
}
