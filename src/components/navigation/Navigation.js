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
        style={{ background: props.indexNav ? "#191919" : "#000" }}
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
          {/* NAV CART */}
          <div className={styles.navRight}>
            <div className={styles.tapRight}>
              <div className={styles.cartIconContainer}>
                <svg
                  className={`${styles.cartIcon}  ${
                    showCart === true ? styles.cartIconActive : ""
                  }`}
                  onClick={() => setShowCart((prevState) => !prevState)}
                  width="23"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </svg>
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
