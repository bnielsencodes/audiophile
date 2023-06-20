import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./CartModal.module.css";

export default function Cart(props) {
  const cart = useContext(CartContext);
  // get quantity of total items in cart
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div className={styles.cartOverlay}>
        <div
          className={styles.cartBackdrop}
        ></div>
        <div className={styles.cart}>
          <div className={styles.header}>
          </div>
        </div>
      </div>
    </>
  );
}
