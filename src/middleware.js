import { NextResponse } from "next/server";

// Hợp lệ để thực hiện 1 route (protected route) hay không.

export function middleware(request) {
  const token = request.cookies.get("access_token")?.value;
  // Nếu người dùng không Token
  if (!token) {
    // Chuyển hướng user về trang login
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Nếu hợp lệ cho phép request tiếp tục
  return NextResponse.next();
}

export const config = {
  matcher: ["/add-todo/:path*"],
};
