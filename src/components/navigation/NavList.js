import Link from "next/link";
import styles from "./NavList.module.css";

export default function NavList() {
  return (
    <>
      <ul className={`${styles.list} hidden-sm-md`}>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/headphones" className={styles.link}>
            Headphones
          </Link>
        </li>
        <li>
          <Link href="/speakers" className={styles.link}>
            Speakers
          </Link>
        </li>
        <li>
          <Link href="/earphones" className={styles.link}>
            Earphones
          </Link>
        </li>
      </ul>
    </>
  );
}
