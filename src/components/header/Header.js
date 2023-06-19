import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.headerMain}>
        <div className={styles.imgContainer}>
          <div className={styles.img} aria-hidden="true"></div>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>New Product</p>
          <h1 className={styles.heading}>XX99 Mark II Headphones</h1>
          <p className={styles.text}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <Link className={styles.link} href="/headphones/xx99-mark-II">
            <input
              className={`${styles.headerBtn} btn btn--orange btn-text--white`}
              type="button"
              value="See Product"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
