import Link from "next/link";
import styles from "./ProductHeader.module.css";

export default function ProductHeader(props) {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.link} href={`/${props.product.category}`}>
          Go Back
        </Link>
      </header>
    </>
  );
}
