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
      >
        {({ values }) => (
          <Form>
          </Form>
        )}
      </Formik>
    </>
  );
}
