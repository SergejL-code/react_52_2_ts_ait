import styles from "./lesson16.module.css";
import * as Yup from "yup";
import { color } from "framer-motion";
import ChildrenProps from "../../components/childrenProps/ChildrenProps";
import MyInput from "../../components/myInput/MyInput";
import MyButton from "../../components/myButton/MyButton";
import { useFormik } from "formik";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("type valid email")
    .required("email is required field"),

  password: Yup.string()
    .min(8, "password need more than 8 symbols")
    .required("password is required field "),
});
function Lesson16(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as { email: string; password: string },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 16: practice before test</h2>
      <ChildrenProps func={() => console.log("много разных пропсов 🙇‍♂️")}>
        {/* обернутые данные придут на место children */}
        <p style={{ color: "red" }}>переданные данные</p>
        <ul>
          <li style={{ listStyle: "none" }}>данные из lesson 16</li>
          <li style={{ listStyle: "none" }}>можно передать много данных</li>
        </ul>
      </ChildrenProps>

      <h2> 2. Input components </h2>

      <form style={{ width: "300px" }} onSubmit={formik.handleSubmit}>
        <MyInput
          formik={formik}
          name="email"
          placeholder="email"
          label="type your email please"
        />
        <MyInput
          formik={formik}
          name="password"
          placeholder="password"
          label="type your secret pass please"
        />
        <MyButton text="sign in" />
      </form>
    </div>
  );
}
export default Lesson16;
