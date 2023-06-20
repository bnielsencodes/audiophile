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
export default function CheckoutForm(props) {
  return (
    <>
    </>
  );
}
