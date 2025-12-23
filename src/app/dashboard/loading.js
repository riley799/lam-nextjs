import styles from "./loading.module.css";

export default function DashboardLoading() {
  return (
    <div className={styles["loading-text"]}>
      <h1>Loading...</h1>
    </div>
  );
}
