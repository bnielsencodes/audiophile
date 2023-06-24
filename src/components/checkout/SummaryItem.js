import { getProductData } from "../../productsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./SummaryItem.module.css";

export default function SummaryItem(props) {
  const id = props.product.id;
  const quantity = props.product.quantity;
  const productData = getProductData(id);

  return (
    <>
      <div className={styles.item}>
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
          <div className={styles.nameQuantityContainer}>
            <h6>{productData.shortName}</h6>
            <p className={styles.quantity}>x{quantity}</p>
          </div>
          <p className={styles.price}>
            <span>$</span>
            {productData.price}
          </p>
        </div>
      </div>
    </>
  );
}
