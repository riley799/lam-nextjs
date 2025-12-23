import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = Date.now();
  console.log(`API/timestamp:${timestamp}`);
  return NextResponse.json({ timestamp });
}
