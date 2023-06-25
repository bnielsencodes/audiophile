import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.imgContainer}>
          <Image
            className={`${styles.img} hidden-md`}
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="person wearing and listening to headphones with right hand on right over right earphone"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-lg`}
            src="/assets/shared/tablet/image-best-gear.jpg"
            alt="person wearing and listening to headphones with right hand on right over right earphone"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-md`}
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="person wearing and listening to headphones with right hand on right over right earphone"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className={styles.textContainer}>
          <article className={styles.textContainerInner}>
            <h5 className={styles.heading}>
              Bringing you the <span>best</span> audio gear
            </h5>
            <p className={styles.text}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
