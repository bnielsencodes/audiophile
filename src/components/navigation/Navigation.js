import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import MobileNavModal from "@/components/navigation/MobileNavModal.js";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div
        className={styles.navContainer}
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
        </nav>
        <MobileNavModal showNav={showNav} />
      </div>
    </>
  );
}
