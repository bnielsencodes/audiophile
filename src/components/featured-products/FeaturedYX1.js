import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedYX1.module.css";

export default function FeaturedYX1() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={`${styles.img} hidden-md`}
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-lg`}
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-md`}
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className={styles.container2}>
          <div className={styles.yx1}>
            <h4 className={styles.heading}>YX1 Earphones</h4>
            <Link className={styles.link} href="/earphones/yx1">
              <input
                className="btn btn--border btn--yx1"
                type="button"
                value="See Product"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
