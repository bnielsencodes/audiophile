import Link from "next/link";

export default function FooterNavList() {
  return (
    <>
      {/* <!-- FOOTER NAV MENU --> */}
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/headphones">
              Headphones
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/speakers">
              Speakers
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/earphones">
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
