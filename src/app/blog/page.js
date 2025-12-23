import Link from "next/link";
export const posts = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "This is the content of blog post 1.",
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "This is the content of blog post 2.",
  },
];

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

export default async function BlogPage() {
  // Lấy dữ liệu trong server component.
  // Cách 1:
  //   const posts = await fetchPosts();
  //   const posts = await fetchUser();
  // Cách 2: sử dụng khi có 2 fetch.
  const [posts, users] = await Promise.all([fetchPosts(), fetchUser()]);
  return (
    <div>
      <h1>Blog Page</h1>
      <section>
        <h2>Người Dùng</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
      <h2>Blogs</h2>
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Link href={`/blog/${post.id}`}>Xem chi tiet</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
