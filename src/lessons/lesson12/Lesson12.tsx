import { useFormik } from "formik";
import styles from "./lesson12.module.css";
import MyButton from "../../components/myButton/MyButton";

interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

function Lesson12(): JSX.Element {
  // ! Вызываем  Hook useFormik, передали в него объект с настройками для формы и результат положили в переменную formik для дальнейшей работы
  // ! Обязательные ключи объекта с настройками:
  // initialValues - начальные значения input
  // onSubmit - действие, которое произойдет при событии submit
  const formik = useFormik({
    // начальные значения для input в форме
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    } as IFormValues,
    // действие которое случится по нажатию на кнопку в форме
    onSubmit: (values: IFormValues) => {
      console.log(values);
    },
  });

  return (
    <>
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
      <h3>Что нужно сделать чтобы форма заработала:</h3>
      <ol className={styles.formGuide}>
        <li>Установили formik через 'npm i formik'</li>
        <li>
          Создали объект formik в который присвоили результат вызова хука
          useFormik() c настройками в объекте
        </li>
        <li>
          В объекте два обязательных ключа: initialValues (начальные значения),
          onSubmit(действие формы)
        </li>
        <li>Для form добавили в onSubmit - formik.handleSubmit </li>
        <li>Для input добавили в onChange - formik.handleChange </li>
        <li>Для input в value добавили его значение через formik.values </li>
        <li>
          У input в поле name должно быть то же значение, что и соответствующий
          ключ в initialValues
        </li>
      </ol>
    </>
  );
}

export default Lesson12;
