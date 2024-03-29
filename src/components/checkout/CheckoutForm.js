import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import cashOnDeliveryIcon from "/public/assets/checkout/icon-cash-on-delivery.svg";
import Summary from "./Summary";
import styles from "./CheckoutForm.module.css";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className={
          meta.touched && meta.error ? styles.labelInvalid : styles.label
        }
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <br />
      <input
        id={props.name}
        className={meta.touched && meta.error ? "input-invalid" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const SubmitBtn = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <input
      className={`${styles.submitForm} btn btn--orange btn-text--white btn--submit`}
      {...field}
      {...props}
    />
  );
};

export default function CheckoutForm(props) {
  const nameRegEx = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
  const phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  // Valid formats:
  //  (123) 456-7890
  //  (123)456-7890
  //  123-456-7890
  //  123.456.7890
  //  1234567890
  //  +31636363634
  //  075-63546725
  const addressRegEx =
    /\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/;
  const numRegEx = /^[0-9]+$/;
  const cityRegEx = /(?:[A-Z][a-z.-]+[ ]?)+/;
  const countryRegEx = /[a-zA-Z]{2,}/;

  // page scrolls to top of main when "continue and pay" button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 96, behavior: "smooth" });
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          zip: "",
          city: "",
          country: "",
          paymentMethod: "",
          paymentMethodChosen: "",
          eMoneyNumber: "",
          eMoneyPin: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(nameRegEx, "Wrong format")
            .max(70, "Must be 70 characters or less")
            .required("Required"),
          email: Yup.string().email("Wrong format").required("Required"),
          phone: Yup.string()
            .matches(phoneRegEx, "Wrong format")
            .required("Required"),
          address: Yup.string()
            .matches(addressRegEx, "Wrong format")
            .required("Required"),
          zip: Yup.string()
            .matches(numRegEx, "Must be a number")
            .min(5, "Must be 5 characters")
            .required("Required"),
          city: Yup.string()
            .matches(cityRegEx, "Wrong format")
            .required("Required"),
          country: Yup.string()
            .matches(countryRegEx, "Wrong format")
            .required("Required"),
          paymentMethodChosen: Yup.string().when("paymentMethod", {
            is: (method) => method === undefined,
            then: () => Yup.string().required("A payment method is required"),
          }),
          eMoneyNumber: Yup.string().when("paymentMethod", {
            is: "eMoney",
            then: () =>
              Yup.string()
                .matches(numRegEx, "Must be a number")
                .min(9, "Must be 9 characters")
                .required("Required"),
          }),
          eMoneyPin: Yup.string().when("paymentMethod", {
            is: "eMoney",
            then: () =>
              Yup.string()
                .matches(numRegEx, "Must be a number")
                .min(4, "Must be 4 characters")
                .required("Required"),
          }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            props.setShowPayConfirm((prevState) => !prevState);
            setSubmitting(false);
          }, 600);
        }}
      >
        {({ values }) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.checkoutForm} id={styles.checkoutFormId}>
                <h1 className={styles.formHeading}>Checkout</h1>
                <fieldset className={styles.section}>
                  <legend className={styles.sectionHeading}>
                    Billing Details
                  </legend>
                  <div className={styles.nameEmailContainer}>
                    <div className={styles.nameContainer}>
                      <TextInput
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Alexei Ward"
                        maxLength={70}
                      />
                    </div>
                    <div className={styles.emailContainer}>
                      <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="alexei@mail.com"
                      />
                    </div>
                  </div>
                  <div className={styles.phoneContainer}>
                    <TextInput
                      label="Phone Number"
                      name="phone"
                      type="text"
                      placeholder="+1 202-555-0136"
                      maxLength={14}
                    />
                  </div>
                </fieldset>

                <fieldset className={styles.section}>
                  <legend className={styles.sectionHeading}>
                    Shipping Info
                  </legend>
                  <div className={styles.addressContainer}>
                    <TextInput
                      label="Your Address"
                      name="address"
                      type="text"
                      placeholder="1137 Williams Avenue"
                      maxLength={50}
                    />
                  </div>
                  <div className={styles.zipCityContainer}>
                    <div className={styles.zipContainer}>
                      <TextInput
                        label="ZIP Code"
                        name="zip"
                        type="text"
                        placeholder="10001"
                        maxLength={5}
                      />
                    </div>
                    <div className={styles.cityContainer}>
                      <TextInput
                        label="City"
                        name="city"
                        type="text"
                        placeholder="New York"
                        maxLength={28}
                      />
                    </div>
                  </div>
                  <div className={styles.countryContainer}>
                    <TextInput
                      label="Country"
                      name="country"
                      type="text"
                      placeholder="United States"
                      maxLength={56}
                    />
                  </div>
                </fieldset>

                <fieldset className={styles.section}>
                  <legend
                    className={`${styles.sectionHeading} ${styles.paymentMethodHeading}`}
                  >
                    Payment Details
                  </legend>
                  <fieldset className={styles.paymentMethodContainer}>
                    <label
                      className={`${styles.label} ${styles.radioGroupLabel}`}
                      id="radio-group-label"
                      htmlFor="radio-group"
                    >
                      Payment Method
                    </label>
                    <div
                      className={styles.radioGroup}
                      id="radio-group"
                      role="group"
                      aria-labelledby="radio-group"
                    >
                      <div>
                        <Field name="paymentMethodChosen">
                          {({ field, meta }) => (
                            <>
                              <label
                                className={
                                  values.paymentMethod === "eMoney"
                                    ? `${styles.radio} ${styles.radioBorder}`
                                    : styles.radio
                                }
                                htmlFor="e-money"
                              >
                                <input
                                  {...field}
                                  className={styles.eMoney}
                                  id="e-money"
                                  value="eMoney"
                                  name="paymentMethod"
                                  type="radio"
                                />
                                {(values.paymentMethod === "" ||
                                  "cashOnDelivery") && (
                                  <div className={styles.unchecked}></div>
                                )}
                                {values.paymentMethod === "eMoney" && (
                                  <div className={styles.checked}></div>
                                )}
                                <p>e-Money</p>
                              </label>
                              <label
                                className={
                                  values.paymentMethod === "cashOnDelivery"
                                    ? `${styles.radio} ${styles.radioBorder}`
                                    : styles.radio
                                }
                                htmlFor="cash-on-delivery"
                              >
                                <input
                                  {...field}
                                  className={styles.cashOnDelivery}
                                  id="cash-on-delivery"
                                  value="cashOnDelivery"
                                  name="paymentMethod"
                                  type="radio"
                                />
                                {(values.paymentMethod === "" || "eMoney") && (
                                  <div className={styles.unchecked}></div>
                                )}
                                {values.paymentMethod === "cashOnDelivery" && (
                                  <div className={styles.checked}></div>
                                )}
                                <p>Cash on Delivery</p>
                              </label>
                              {meta.touched && meta.error ? (
                                <div className={styles.errorRadio}>
                                  {meta.error}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>
                      </div>
                    </div>
                  </fieldset>

                  {values.paymentMethod === "eMoney" ? (
                    <div className={styles.eMoneyContainer}>
                      <div className={styles.eNumberContainer}>
                        <TextInput
                          label="e-Money Number"
                          name="eMoneyNumber"
                          type="text"
                          placeholder="238521993"
                          maxLength={9}
                        />
                      </div>
                      <div className={styles.ePinContainer}>
                        <TextInput
                          label="e-Money PIN"
                          name="eMoneyPin"
                          type="text"
                          placeholder="6891"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  ) : values.paymentMethod === "cashOnDelivery" ? (
                    <div className={styles.message}>
                      <div className={styles.cashOnDeliveryIcon}>
                        <Image
                          src={cashOnDeliveryIcon}
                          alt="product"
                          width="0"
                          height="0"
                          sizes="100vw"
                        />
                      </div>
                      <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  ) : null}
                </fieldset>
              </div>
              <div className={styles.summary}>
                <Summary
                  submitBtn={
                    <SubmitBtn
                      name="submit"
                      type="submit"
                      value="Continue & Pay"
                      onClick={handleScrollToTop}
                    />
                  }
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
