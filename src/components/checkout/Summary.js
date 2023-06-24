import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import SummaryItem from "./SummaryItem.js";
import styles from "./Summary.module.css";

export default function Summary(props) {
  const cart = useContext(CartContext);
  // get quantity of total items in cart
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const summaryItems = cart.items.map((product) => {
    return <SummaryItem key={product.id} product={product} />;
  });

  return (
    <>
      <div className={styles.summary}>
        <h4 className={styles.heading}>Summary</h4>
        <div>{productsCount > 0 && summaryItems}</div>

        <div className={styles.totalSection}>
          <div className={styles.totalTopContainer}>
            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>Total</p>
              <p className={styles.price}>
                <span>$</span>
                {cart.getTotalCost(0)}
              </p>
            </div>

            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>Shipping</p>
              <p className={styles.price}>
                <span>$</span>
                50
              </p>
            </div>

            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>VAT (Included)</p>
              <p className={styles.price}>
                <span>$</span>
                {cart.getVAT()}
              </p>
            </div>
          </div>

          <div className={`${styles.totalItem} ${styles.grandTotal}`}>
            <p className={styles.totalItemHeading}>Grand Total</p>
            <p className={`${styles.price} ${styles.grandTotalPrice}`}>
              <span>$</span>
              {cart.getTotalCost(50)}
            </p>
          </div>
        </div>

        {/* submit form button */}
        {props.submitBtn}
      </div>
    </>
  );
}
