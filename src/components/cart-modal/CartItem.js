import { getProductData } from "../../productsData.js";
import Image from "next/image";
import Counter from "../counter/Counter";
import styles from "./CartItem.module.css";

export default function CartItem(props) {
  const id = props.product.id;
  const productData = getProductData(id);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemLeft}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={productData.cartImage}
              alt="product"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className={styles.productDetails}>
            <p className={styles.shortName}>{productData.shortName}</p>
            <p className={styles.price}>
              <span>$</span>
              {productData.priceString}
            </p>
          </div>
        </div>
        <Counter id={id} class="cartItem" />
      </div>
    </>
  );
}
