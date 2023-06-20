import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import checkIcon from "/public/assets/checkout/icon-order-confirmation.svg";
import Image from "next/image";
import Link from "next/link";

export default function PayConfirmModal(props) {
  return (
    <>
      <div className={styles.payConfirmOverlay}>
        <div
          className={styles.payConfirmBackdrop}
        ></div>
        <div className={styles.container}>
          <div className={styles.checkContainer}>
            <Image
              className={styles.check}
              src={checkIcon}
              alt="product"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <p className={styles.heading}>
            Thank you
            <br />
            for your order
          </p>
          <p className={styles.subheading}>
            You will receive an email confirmation shortly.
          </p>
          <div className={styles.summary}>
            <div className={styles.itemsContainer}>
              <div className={styles.itemsContainerInner}>
                <div className={styles.item}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={productData.cartImage}
                      alt="product"
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.productDetails}>
                    <div className={styles.nameQuantityContainer}>
                      <h6 className={styles.shortName}>
                        {productData.shortName}
                      </h6>
                      <p className={styles.quantity}>
                      </p>
                    </div>
                    <div className={styles.priceContainer}>
                      <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.other}>
                </p>
              </div>
            </div>
            <div className={styles.totalContainer}>
              <p className={styles.totalText}>Grand Total</p>
              <div className={styles.totalPriceContainer}>
                <div className={styles.totalIconContainer}>
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- BACK TO HOME BUTTON --> */}
          <Link
            href="/"
            className="back-to-home-link"
          >
            <input
              className={`${styles.backToHomeBtn} btn btn--orange btn-text--white`}
              type="button"
              value="Back to home"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
