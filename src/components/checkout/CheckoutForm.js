import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
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
      >
        {({ values }) => (
          <Form>
          </Form>
        )}
      </Formik>
    </>
  );
}
