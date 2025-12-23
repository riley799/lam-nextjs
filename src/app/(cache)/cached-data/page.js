import { clearTimestampCache } from "./action";

async function fetchData() {
  console.log("fetching data...");
  const res = await fetch("http://localhost:3001/api/timestamp", {
    cache: "force-cache", // áp dụng cache cho web
    // next: { revalidate: 5 }, // dữ liệu được tái xác thực sau mỗi 5s
    next: { tags: ["timestamp"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function CachedPage() {
  const data1 = await fetchData();
  const data2 = await fetchData();
  return (
    // <div>
    //   <h1>Cached Page</h1>
    //   <p>Timestamp 1:{data1.timestamp}</p>
    //   <p>Timestamp 2:{data2.timestamp}</p>
    // </div>
    <div>
      <h1>Cached Page revalidateTag</h1>
      <p>Timestamp 1: {data1.timestamp}</p>
      <form action={clearTimestampCache}>
        <button type="submit">Xóa cache timestamp</button>
      </form>
    </div>
  );
}
