import Shop from "../shop/Shop";
import styles from "./MobileNavModal.module.css";

export default function MobileNav(props) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.overlayBg}>
          <Shop />
        </div>
      </div>
    </>
  );
}
