import InTheBox from "./InTheBox";
import styles from "./Features.module.css";

export default function Features(props) {
  const inTheBox = props.product.includes.map((item) => {
    return <InTheBox key={item.id} item={item} />;
  });

  return (
    <>
      <section className={styles.container}>
        {/* <!-- FEATURES SECTION --> */}
        <article className={styles.text}>
          <h2>Features</h2>
          <p>{props.product.features}</p>
        </article>
        {/* <!-- IN THE BOX SECTION --> */}
        <div className={styles.inTheBox}>
          <h2>In The Box</h2>
          <div className={styles.listContainer}>
            <ul className={styles.list}>{inTheBox}</ul>
          </div>
        </div>
      </section>
    </>
  );
}
