import Link from "next/link";

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
