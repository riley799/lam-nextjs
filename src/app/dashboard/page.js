import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  // throw new Error("Something went wrong");
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
    </div>
  );
}
