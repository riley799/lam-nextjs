export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`http://localhost:3001/api/posts/${slug}`);
  const post = await res.json();
  if (!post) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: post.title,
    description: `Noi dung bai viet cho title: ${post.title}`,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const res = await fetch(`http://localhost:3001/api/posts/${slug}`);
  const post = await res.json();

  if (!post) {
    return (
      <>
        <h1>Post not Found</h1>
      </>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Noi dung bai viet cho slug: {params.slug}</p>
    </div>
  );
}
