import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;
  if (slug) {
    return NextResponse.json({
      data: {
        message: `Docs ${slug.join("/")}`,
      },
    });
  } else {
    return NextResponse.json({
      data: {
        message: "Docs is not having slug params",
      },
    });
  }
}
