import styles from "./lesson09.module.css";

function Lesson09() {
  console.log(styles);
  return (
    <div>
      {/* <h2 className={styles['text-orange']}>Lesson09, css modules</h2> */}
      {/* <h2 className={styles.textOrange+ ' '+ styles.heading}>Lesson09, css modules</h2> */}
      <h2 className={`${styles.textOrange} ${styles.heading}`}>
        Lesson09, css modules
      </h2>
      <p className={styles.desk}>
        Css modules - это способ изолированно работать с стилями CSS
      </p>
    </div>
  );
}

export default Lesson09;
