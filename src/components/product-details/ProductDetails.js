import { useContext } from "react";
import { CartContext } from "../../CartContext.js";
import ProductImg from "./ProductImg";
import Counter from "../counter/Counter.js";
import Features from "./Features";
import ImgGallery from "./ImgGallery";
import styles from "./ProductDetails.module.css";

export default function ProductDetails(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <ProductImg product={props.product} />
        </div>
        <div className={styles.innerContainer}>
          {product.new && (
            <p
              id="overline--small-text"
              className="overline overline--current-product"
            >
              New Product
            </p>
          )}
          <h1 className={styles.heading}>{product.name}</h1>
          <p className={styles.text}>{product.description}</p>
          <p className={styles.price}>
            <span>$</span>
            {props.product.priceString}
          </p>
          <div className={styles.addToCart}>
            {productQuantity > 0 ? (
              <Counter
                id={product.id}
                product={product}
                productDetails={true}
              />
            ) : (
              <>
                <div>
                  <input
                    className="add-to-cart btn btn--orange btn-text--white"
                    onClick={() => cart.addOneToCart(product.id)}
                    type="button"
                    value="Add to Cart"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Features product={product} />
      <ImgGallery product={product} />
    </>
  );
}
