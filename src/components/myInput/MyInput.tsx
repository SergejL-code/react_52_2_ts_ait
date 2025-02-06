import { FormikProps } from "formik";
import styles from "./myInput.module.css";
interface IMyInput {
  name: string;
  type?: " password" | "email" | "text" | "number";
  placeholder?: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
}
function MyInput({
  name,
  type = "text",
  placeholder = "input text",
  label = "label text",
  formik,
}: IMyInput): JSX.Element {
  const { handleChange, values, errors } = formik;
  return (
    <div>
      {errors[name] ? (
        <label className={styles.errorText}>{errors[name] as string}</label>
      ) : (
        <label>{label}</label>
      )}
      <input
        onChange={handleChange}
        value={values[name]}
        className={styles.myInput}
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
}
export default MyInput;
