import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedZX9.module.css";

export default function FeaturedZX9() {
  return (
    <>
      <div className={styles.zx9}>
        <div className={styles.inner}>
          <div className={styles.imgContainer}>
            <div className={styles.imgContainerInner}>
              <Image
                className={`${styles.img} hidden-md`}
                src="/assets/home/mobile/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                className={`${styles.img} hidden-sm-lg`}
                src="/assets/home/tablet/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                className={`${styles.img} hidden-sm-md`}
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="ZX9 Speaker"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                className={`${styles.circles} hidden-sm-md`}
                src="/assets/home/desktop/pattern-circles.svg"
                alt="circle shapes in background"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className={styles.inner2}>
          <h1 className={styles.heading}>ZX9 Speaker</h1>
          <p className={styles.text}>
            Upgrade to premium speakers that are phenomenally built to deliver
            remarkable sound.
          </p>
          <Link href="/speakers/zx9">
            <input
              className="btn btn--black btn-text--white"
              type="button"
              value="See Product"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
