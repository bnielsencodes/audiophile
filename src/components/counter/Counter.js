import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import styles from "./Counter.module.css";

export default function ProductDetails(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.id);

  return (
    <>
      <div
        className={`${styles.quantityContainer} 
        ${
          props.class === "cartItem"
            ? styles["quantityContainer--cartItem"]
            : null
        }`}
      >
        <div className={styles.removeContainer}>
          <p
            className={styles.removeBtn}
            onClick={() => cart.removeOneFromCart(props.id)}
          >
            &minus;
          </p>
        </div>
        <p className={styles.quantity}>{productQuantity}</p>
        <div className={styles.addContainer}>
          <p
            className={styles.addBtn}
            onClick={() => cart.addOneToCart(props.id)}
          >
            &#43;
          </p>
        </div>
      </div>
      {props.productDetails && (
        <div>
          <input
            className="add-to-cart btn btn--orange btn-text--white"
            onClick={() => cart.deleteFromCart(product.id)}
            type="button"
            value="Remove"
          />
        </div>
      )}
    </>
  );
}
