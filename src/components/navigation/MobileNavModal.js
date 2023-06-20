import Shop from "../shop/Shop";
import styles from "./MobileNavModal.module.css";

export default function MobileNavModal(props) {
  if (!props.showNav) {
    return null;
  }

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
