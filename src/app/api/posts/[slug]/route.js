import { NextResponse } from "next/server";

const posts = [
  {
    slug: "bai-viet-1",
    title: "Bai-viet-1",
    description: "Đây là nội dung của bài viết đầu tiên",
    lastModified: "2023-01-01T10:00:00Z",
  },
  {
    slug: "bai-viet-2",
    title: "Bai-viet-2",
    description: "Đây là nội dung của bài viết thứ 2",
    lastModified: "2023-01-01T10:00:00Z",
  },
  {
    slug: "bai-viet-3",
    title: "Bai-viet-3",
    description: "Đây là nội dung của bài viết thứ 3",
    lastModified: "2023-01-01T10:00:00Z",
  },
];

export async function GET(request, { params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json(
      {
        message: "Post not found",
      },
      { status: 404 }
    );
  }
}
