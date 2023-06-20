import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function CartItem(props) {
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
            <div className={styles.priceContainer}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <p>{productData.priceString}</p>
            </div>
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <div className={styles.removeContainer}>
              &minus;
            </p>
          </div>
          <p className={styles.quantity}>{quantity}</p>
          <div className={styles.addContainer}>
          </div>
        </div>
      </div>
    </>
  );
}
