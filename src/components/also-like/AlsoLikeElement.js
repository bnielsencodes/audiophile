import Image from "next/image";
import Link from "next/link";
import styles from "./AlsoLikeElement.module.css";

export default function AlsoLikeElement(props) {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={`${styles.img} hidden-md`}
          src={props.item.image.mobile}
          alt={props.item.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-lg`}
          src={props.item.image.tablet}
          alt={props.item.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-md`}
          src={props.item.image.desktop}
          alt={props.item.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <h5 className={styles.heading}>{props.item.name}</h5>
        <Link href={props.item.path}>
          <input
            className="btn btn--orange btn-text--white"
            type="button"
            value="See Product"
          />
        </Link>
      </div>
    </>
  );
}
