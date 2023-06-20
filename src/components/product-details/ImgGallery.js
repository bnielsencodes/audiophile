import Image from "next/image";

export default function ImgGallery(props) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.imgContainer}>
            <Image
              className={`${styles.img} hidden-md`}
              src={props.product.gallery.first.mobile}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-lg`}
              src={props.product.gallery.first.tablet}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-md`}
              src={props.product.gallery.first.desktop}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={`${styles.img} hidden-md`}
              src={props.product.gallery.second.mobile}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-lg`}
              src={props.product.gallery.second.tablet}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-md`}
              src={props.product.gallery.second.desktop}
              alt="image of product"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
        <div className={`${styles.imgContainer} ${styles.imgContainer3}`}>
          <Image
            className={`${styles.img} hidden-md`}
            src={props.product.gallery.third.mobile}
            alt="image of product"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-lg`}
            src={props.product.gallery.third.tablet}
            alt="image of product"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className={`${styles.img} hidden-sm-md`}
            src={props.product.gallery.third.desktop}
            alt="image of product"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
