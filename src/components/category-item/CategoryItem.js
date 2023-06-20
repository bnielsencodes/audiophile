import Image from "next/image";
import Link from "next/link";

export default function CategoryItem(props) {
  const product = props.item;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div
            className={`${styles.imgContainer} ${
              product.slug === "xx99-mark-one-headphones"
                ? styles.reverseOrder
                : ""
            } ${product.slug === "zx7-speaker" ? styles.reverseOrder : ""}`}
          >
            <Image
              className={`${styles.img} hidden-md`}
              src={product.categoryImage.mobile}
              alt={product.name}
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-lg`}
              src={product.categoryImage.tablet}
              alt={product.name}
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={`${styles.img} hidden-sm-md`}
              src={product.categoryImage.desktop}
              alt={product.name}
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className={styles.bottomContainer}>
            {product.new && <p className="overline">New Product</p>}
            <h2 id={product.slug} className={styles.heading}>
              {product.name}
            </h2>
            <p className={styles.text}>{product.description}</p>
            <Link href={product.path}>
              <input
                className="btn btn--orange btn-text--white"
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
