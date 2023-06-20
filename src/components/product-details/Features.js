export default function Features(props) {
  return (
    <>
      <section className={styles.container}>
        {/* <!-- FEATURES SECTION --> */}
        <article className={styles.text}>
          <h5>Features</h5>
          <p>{props.product.features}</p>
        </article>
        {/* <!-- IN THE BOX SECTION --> */}
        <div className={styles.inTheBox}>
          <h5>In The Box</h5>
          <div className={styles.listContainer}>
          </div>
        </div>
      </section>
    </>
  );
}
