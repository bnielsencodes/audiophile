import Image from "next/image";
import Link from "next/link";
import styles from "./Shop.module.css";

export default function Shop() {
  return (
    <>
      <section className={styles.section}>
        {/* <!-- SHOP ITEM ONE --> */}
        <Link className={`${styles.item} ${styles.hvrBob}`} href="/headphones">
          <div className={`${styles.imgContainer} ${styles.markI}`}>
            <Image
              className={styles.img}
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="XX99 Mark II Headphones"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <p className={styles.heading}>Headphones</p>
          <div className={styles.shopText}>
            <p className={styles.text}>Shop</p>
            <svg
              className={styles.arrow}
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
        {/* <!-- SHOP ITEM TWO --> */}
        <Link className={`${styles.item} ${styles.hvrBob}`} href="/speakers">
          <div className={`${styles.imgContainer} ${styles.zx9}`}>
            <Image
              className={styles.img}
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="ZX9 Speaker"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <p className={styles.heading}>Speakers</p>
          <div className={styles.shopText}>
            <p className={styles.text}>Shop</p>
            <svg
              className={styles.arrow}
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
        {/* <!-- SHOP ITEM THREE --> */}
        <Link className={`${styles.item} ${styles.hvrBob}`} href="/earphones">
          <div className={`${styles.imgContainer} ${styles.yx1}`}>
            <Image
              className={styles.img}
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="YX1 Earphones"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <p className={styles.heading}>Earphones</p>
          <div className={styles.shopText}>
            <p className={styles.text}>Shop</p>
            <svg
              className={styles.arrow}
              width="8"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </section>
    </>
  );
}
