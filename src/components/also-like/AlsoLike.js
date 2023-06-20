import AlsoLikeElement from "@/components/also-like/AlsoLikeElement";

export default function AlsoLike(props) {
  const alsoLikeElements = props.product.others.map((item) => {
    return <AlsoLikeElement key={item.id} item={item} />;
  });

  return (
    <>
      <section className={styles.alsoLike}>
        <h5 className={styles.heading}>You May Also Like</h5>
        <div className={styles.container}>{alsoLikeElements}</div>
      </section>
    </>
  );
}
