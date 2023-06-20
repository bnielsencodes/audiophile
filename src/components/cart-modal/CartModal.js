import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Cart(props) {
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
