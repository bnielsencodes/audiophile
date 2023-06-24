import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import CartItem from "./CartItem.js";
import Link from "next/link";
import styles from "./CartModal.module.css";

export default function Cart(props) {
  const cart = useContext(CartContext);
  // get quantity of total items in cart
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // CONDITIONALLY SHOW CART MODAL WHEN CART ICON IS CLICKED
  if (!props.showCart) {
    return null;
  }

  const cartItems = cart.items.map((product) => {
    return <CartItem key={product.id} product={product} />;
  });

  return (
    <>
      <div className={styles.cartOverlay}>
        <div
          className={styles.cartBackdrop}
          onClick={() => props.setShowCart(false)}
        ></div>
        <div className={styles.cart}>
          <div className={styles.header}>
            {productsCount > 0 ? (
              <>
                <div>
                  <p className={styles.totalItems}>
                    Cart<span>&#40;{productsCount}&#41;</span>
                  </p>
                </div>
                <p
                  className={styles.removeAll}
                  onClick={() => cart.deleteAll()}
                >
                  Remove all
                </p>
              </>
            ) : (
              <>
                <div>
                  <p className={styles.totalItems}>
                    Cart<span>&#40;{productsCount}&#41;</span>
                  </p>
                </div>
              </>
            )}
          </div>
          {productsCount > 0 ? (
            <>
              <div>{cartItems}</div>
              {/* <!-- CART TOTAL --> */}
              <div className={styles.total}>
                <p className={styles.totalText}>Total</p>
                <p className={styles.totalPrice}>
                  <span>$</span>
                  {cart.getTotalCost(0)}
                </p>
              </div>
              {/* <!-- GO TO CHECKOUT BUTTON --> */}
              <Link href="/checkout" className="checkout-submit-link">
                <input
                  className={`${styles.checkoutBtn} btn btn--orange btn-text--white`}
                  type="button"
                  value="Checkout"
                />
              </Link>
            </>
          ) : (
            <>
              <h2 className={styles.emptyCart}>Your cart is empty</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
