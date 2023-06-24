import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import { getProductData } from "../../productsData.js";
import Image from "next/image";
import styles from "./CartItem.module.css";

export default function CartItem(props) {
  const cart = useContext(CartContext);
  const id = props.product.id;
  const quantity = props.product.quantity;
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
            <h6>{productData.shortName}</h6>
            <p className={styles.price}>
              <span>$</span>
              {productData.priceString}
            </p>
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <div className={styles.removeContainer}>
            <p
              className={styles.removeBtn}
              onClick={() => cart.removeOneFromCart(id)}
            >
              &minus;
            </p>
          </div>
          <p className={styles.quantity}>{quantity}</p>
          <div className={styles.addContainer}>
            <p className={styles.addBtn} onClick={() => cart.addOneToCart(id)}>
              &#43;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
