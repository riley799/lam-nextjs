import Image from "next/image";
import styles from "./page.module.css";
// import ClientComponent from "@/components/ClientCopmonent/ClientComponent";
// import InteractiveComponent from "@/components/InteractiveComponent/InteractiveComponent";
import StoreProvider from "./StoreProvider";
import PostList from "./PostList";

export const metadata = {
  title: "Letdiv HomePage",
  description: " Đây là trung chủ của LetDiv ",
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Home({ searchParams }) {
  const initialPosts = await getPosts();
  const nonSerializableProp = () => {
    console.log("nonSerializableProp");
  };
  const { name = "Default", age = 18 } = await searchParams;
  return (
    <StoreProvider initialPosts={initialPosts}>
      <PostList initialPosts={initialPosts} />
      <div className={styles.page}>
        {/* <ClientComponent nonSerializableProp={nonSerializableProp} /> */}
        <main className={styles.main}>
          <p>
            Từ khoá tìm kiếm {name}, {age}
          </p>

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className={styles.intro}>
            <h1>Lam App</h1>
            <p>
              Looking for a starting point or more instructions? Head over to or
              the center.
            </p>
          </div>
          <div className={styles.ctas}></div>
        </main>
      </div>
    </StoreProvider>
  );
}
