import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;
  if (email !== "admin@gmail.com" || password !== "123") {
    return NextResponse.json(
      {
        message: "Email hoặc mật khẩu không chính xác",
      },
      {
        status: 401, // 401 Unauthorized
      }
    );
  }
  // Tạo TOKEN VÀ SET COOKIE
  const accessToken = "fake-jwt-lam";

  // Lấy cookie stores
  const cookieStore = await cookies();

  // set cookie
  cookieStore.set("access_token", accessToken, {
    httpOnly: true, // Ngăn JS phía Client truy cập cookie
    secure: process.env.NODE_ENV === "production", // Chỉ gởi qua HTTPS ở môi trường production
    maxAge: 60 * 60 * 24 * 7, // 1 tuần
    path: "/", // Áp dụng cho toàn bộ trang.
  });
  return NextResponse.json({
    message: "Đăng nhập thành công",
  });
}
