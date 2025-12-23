import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get("name") || "Guest";
  const age = searchParams.get("age") || 0;

  const headerList = await headers();
  const userAgent = headerList.get("user-agent");
  const authorization = headerList.get("authorization");

  //   return NextResponse.json({
  //     message: `Hello ${name}`,
  //     age: age,
  //     userAgent: userAgent,
  //     authorization: authorization,
  //   });

  const response = NextResponse.json({
    data: {
      name,
      age,
    },
  });

  //Modify header: thêm or override

  response.headers.set("user-agent", userAgent);
  response.headers.set("authorization", authorization);
  response.headers.set("Content-Type", "application/json");
  return response;
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(
    {
      receiveBody: body,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-control": "no-store",
      },
    }
  );
}

// response trả về dạng json, thì nó còn redirect, tạo đối tượng trong response mới.
