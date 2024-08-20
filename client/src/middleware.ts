
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the request is exactly for /admin, skip authentication (e.g., show login form)
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  // For any routes under /admin/*, perform authentication check
  const token = request.cookies.get("session_id");

  if (!token) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// Specify the paths to match for middleware execution
export const config = {
  matcher: ["/admin/:path*"], // Matches all /admin/* paths
};