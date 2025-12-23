// error handling -> try/catch
// cung cấp phản hồi có ý nghĩa cho client khi có lỗi xảy ra
// tránh crash server hoặc lộ thông tin nhạy cảm
// giúp gỡ lỗi dễ dàng hơn.

import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  try {
    throw new Error("Đây là 1 lỗi tạo ra có chủ đích để test lỗi");
    return NextResponse.json({
      data: {
        message: "Simple Error",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        data: {
          message: error.message,
        },
      },
      { status: 500 }
    );
  }
}
