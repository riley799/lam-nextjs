import Link from "next/link";
import styles from "./product-detail.module.css";
import { products } from "../page";

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const productId = slug[0];
  const product = products.find((product) => product.id == productId);
  return (
    <div className={styles.container}>
      {product ? (
        <>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.productDescription}>{product.description}</p>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Product not found</h1>
        </>
      )}
      <Link href={"/product"} className={styles.backButton}>
        Go Back
      </Link>
    </div>
  );
}
