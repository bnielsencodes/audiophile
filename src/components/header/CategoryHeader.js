import styles from "./CategoryHeader.module.css";

export default function CategoryHeader(props) {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.heading}>{props.category}</h2>
      </header>
    </>
  );
}
