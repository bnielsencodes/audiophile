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
  return (
    <>
    </>
  );
}
