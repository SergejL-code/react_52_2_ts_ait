// импорт стилей в переменной из файла module.css
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson09.module.css";

function Lesson09() {
  console.log(styles);
  return (
    <div>
      {/* если css написан в стиле kebab case через дефис мы все равно можем обратиться к ключу но делать это неудобно */}
      {/* Вариант1: */}
      {/* <h2 className={styles['text-orange'] }>Lesson 09. Css modules 🎨</h2> */}
      {/* Вариант2: */}
      {/* <h2 className={styles.textOrange + ' ' + styles.heading}>Lesson 09. Css modules 🎨</h2> */}

      {/* Вариант3: */}
      <h2 className={`${styles.textOrange} ${styles.heading}`}>
        Lesson09, css modules🎨
      </h2>
      <p className={styles.desc}>
        Css modules - это способ изолированно работать co стилями CSS
      </p>
      <MyButton variant="danger" text="disabled" disabled={true} />
      <MyButton variant="danger" text="danger" />
      <MyButton variant="primary" text="primary" />
      <p>
        Задачу добавления нескольких классов в css module можно решить
        несколькими способами:
      </p>
      <ul className={styles.list}>
        <li>Конкатенация</li>
        <li>Шаблонная строка</li>
        <li>Библиотека classnames</li>
      </ul>
    </div>
  );
}

export default Lesson09;
