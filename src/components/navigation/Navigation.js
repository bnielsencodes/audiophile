import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
export default function Navigation(props) {
  return (
    <>
        <nav className={styles.nav}>
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
    </>
  );
}
