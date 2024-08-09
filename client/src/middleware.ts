import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const auth = request.cookies.get("session_id");
    if (!auth) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  return response;
}

export const config = {
   matcher: "/admin/dashboard/:path*"
};


