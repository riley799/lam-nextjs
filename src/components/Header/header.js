// src/components/Header/Header.js
import Link from "next/link";
import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          LetDiv Blog
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Trang chủ</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/product">Sản phẩm</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">Giới thiệu</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Liên hệ</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/login">Đăng nhập</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
