import { resolve } from "styled-jsx/css";
import styles from "./streaming.module.css";

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Data fetched successfully";
}

export default async function StreamingComponent() {
  const data = await fetchData();
  return (
    <div className={styles.slowComponentContainer}>
      <h3 className={styles.slowComponentTitle}>
        Thành phần streaming :{data}
      </h3>
    </div>
  );
}
