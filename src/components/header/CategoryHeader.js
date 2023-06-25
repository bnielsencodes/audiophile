import styles from "./CategoryHeader.module.css";

export default function CategoryHeader(props) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>{props.category}</h1>
      </header>
    </>
  );
}
