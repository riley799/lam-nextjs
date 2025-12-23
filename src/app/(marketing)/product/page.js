import Link from "next/link";
import styles from "./product.module.css";

export const products = [
  {
    id: 1,
    title: "Product 1",
    description: "This is the description of product 1.",
  },

  {
    id: 2,
    title: "Product 2",
    description: "This is the description of product 2.",
  },
];

export default function ProductPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2 className={styles.productName}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <Link href={`/product/${product.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
