import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import { getProductData } from "../../productsData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import checkIcon from "/public/assets/checkout/icon-order-confirmation.svg";
import Image from "next/image";
import Link from "next/link";

export default function PayConfirmModal(props) {
  const cart = useContext(CartContext);
  const id = cart.items[0].id;
  const productData = getProductData(id);

  // CONDITIONALLY SHOW PayConfirm MODAL WHEN CART ICON IS CLICKED
  if (!props.showPayConfirm) {
    return null;
  }

  return (
    <>
      <div className={styles.payConfirmOverlay}>
        <div
          className={styles.payConfirmBackdrop}
          onClick={() => props.setShowPayConfirm(false)}
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
                        x{cart.items[0].quantity}
                      </p>
                    </div>
                    <div className={styles.priceContainer}>
                      <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>
                      <p>{productData.price.toLocaleString("en-US")}</p>
                    </div>
                  </div>
                </div>
                <p className={styles.other}>
                  and {cart.items.length - 1} other items&#40;s&#41;
                </p>
              </div>
            </div>
            <div className={styles.totalContainer}>
              <p className={styles.totalText}>Grand Total</p>
              <div className={styles.totalPriceContainer}>
                <div className={styles.totalIconContainer}>
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <p>{cart.getTotalCost(50)}</p>
              </div>
            </div>
          </div>
          {/* <!-- BACK TO HOME BUTTON --> */}
          <Link
            href="/"
            className="back-to-home-link"
            onClick={() => {
              setTimeout(() => {
                cart.deleteAll();
              }, 500);
            }}
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
