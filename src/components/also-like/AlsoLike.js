import AlsoLikeElement from "@/components/also-like/AlsoLikeElement";
import styles from "./AlsoLike.module.css";

export default function AlsoLike(props) {
  const alsoLikeElements = props.product.others.map((item) => {
    return <AlsoLikeElement key={item.id} item={item} />;
  });

  return (
    <>
      <section className={styles.alsoLike}>
        <h3 className={styles.heading}>You May Also Like</h3>
        <div className={styles.container}>{alsoLikeElements}</div>
      </section>
    </>
  );
}
