import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Cookie set" });
  response.cookies.set("myCookie", "value", {
    path: "/",
    maxAge: 60,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ message: "Cookie delete" });
  response.cookies.delete("myCookie");
  return response;
}
