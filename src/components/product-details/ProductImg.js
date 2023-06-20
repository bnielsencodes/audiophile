import Image from "next/image";

export default function ProductImg(props) {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image
          className={`${styles.img} hidden-md`}
          src={props.product.image.mobile}
          alt={props.product.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-lg`}
          src={props.product.image.tablet}
          alt={props.product.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-md`}
          src={props.product.image.desktop}
          alt={props.product.name}
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
    </>
  );
}
