import { getProductData } from "../../productsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
          <div className={styles.priceContainer}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <p>{productData.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
