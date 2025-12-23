import Link from "next/link";
import { posts } from "../page";
import styles from "./blog-detail.module.css";
import { revalidateProductPath } from "./action";

export async function generateStaticParams() {
  return posts.map((post) => ({
    blogId: post.id.toString(),
  }));
}

export const dynamicParams = false;
export default async function BlogDetail({ params }) {
  console.log("BlogDetail Render");
  // params: {blogId: ?(thay đổi liên tục luôn là dạng string)}

  const { blogId } = await params;
  console.log(blogId);
  const post = posts.find((post) => post.id == blogId);
  return (
    <div className={styles.container}>
      <form action={revalidateProductPath}>
        <button>Revalidate</button>
      </form>
      {post ? (
        <>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.content}>{post.content}</p>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Post not found</h1>
        </>
      )}
      <Link href={"/blog"} className={styles.backButton}>
        Go Back
      </Link>
    </div>
  );
}
