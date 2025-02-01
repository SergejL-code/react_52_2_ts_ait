import { useFormik } from "formik";
import styles from "./lesson12.module.css";
import MyButton from "../../components/myButton/MyButton";

interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

function Lesson12(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      firstname: "Vasya",
      lastname: "Pupkin",
      email: "user@step.com",
    } as IFormValues,
    onSubmit: (values: IFormValues) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h2>Lesson12 12:Formik</h2>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          onChange={formik.handleChange}
          value={formik.values.firstname}
          name="firstname"
          type="text"
          title="firstname"
          placeholder="firstname"
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.lastname}
          name="lastname"
          type="text"
          title="lastname"
          placeholder="lastname"
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          type="email"
          title="e-mail"
          placeholder="e-mail"
        />
        <MyButton type="submit" text="send Data" />
      </form>
    </div>
  );
}

export default Lesson12;
