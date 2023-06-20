import { useContext, useState } from "react";
import { CartContext } from "../../CartContext.js";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import MobileNavModal from "@/components/navigation/MobileNavModal.js";
import CartModal from "@/components/cart-modal/CartModal";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  const cart = useContext(CartContext);

  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // get quantity of total items in cart
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div
        className={styles.navContainer}
        style={{ background: props.indexNav ? "#141414" : "#000" }}
      >
        <nav className={styles.nav}>
          <div className={`${styles.tapLeft} ${styles.hiddenLg}`}>
            <div className={styles.burgerIconContainer}>
              <Image
                className={`${styles.burgerIcon} ${
                  showNav === true ? styles.burgerIconActive : ""
                }`}
                onClick={() => {
                  setShowNav((prevState) => !prevState);
                  setShowCart(
                    showCart == true && showNav == true ? true : false
                  );
                }}
                src="/assets/shared/tablet/icon-hamburger.svg"
                alt="hamburger menu icon for dropdown navigation menu"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
          {/* MD/LG SCREENS NAVIGATION */}
          <NavList />
          {/* NAV LOGO */}
          <Link className={styles.linkComponent} href="/">
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src="/assets/shared/desktop/logo.svg"
                alt="Audiophile brand logo"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </Link>
          {/* NAV CART */}
          <div className={styles.navRight}>
            <div className={styles.tapRight}>
              <div className={styles.cartIconContainer}>
                <Image
                  className={`${styles.cartIcon}  ${
                    showCart === true ? styles.cartIconActive : ""
                  }`}
                  onClick={() => setShowCart((prevState) => !prevState)}
                  src="/assets/shared/desktop/icon-cart.svg"
                  alt="shopping cart icon"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                <div className={styles.badge}>
                  <span>{productsCount}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <MobileNavModal showNav={showNav} />
        <CartModal showCart={showCart} setShowCart={setShowCart} />
      </div>
    </>
  );
}
