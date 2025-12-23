"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Đăng nhập thành công, backend đã set cookie
        router.push("/add-todo");
      } else {
        // Đăng nhập thất bại
        const data = await res.json();
        setError(data.message || "Email hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="username"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            user="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <button onClick={() => router.back()} className={styles["back-button"]}>
        Go back
      </button>
    </div>
  );
}
