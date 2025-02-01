import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.gridContainer}>
      <Link to="lesson-1">
        <div>Lesson 01</div>
      </Link>
      <Link to="lesson-2">
        <div>Lesson 02</div>
      </Link>
      <Link to="lesson-3">
        <div>Lesson 03</div>
      </Link>
      <Link to="lesson-4">
        <div>Lesson 04</div>
      </Link>
      <Link to="lesson-5">
        <div>Lesson 05</div>
      </Link>
      <Link to="lesson-6">
        <div>Lesson 06</div>
      </Link>
      <Link to="lesson-7">
        <div>Lesson 07</div>
      </Link>
      <Link to="lesson-8">
        <div>Lesson 08</div>
      </Link>
      <Link to="lesson-9">
        <div>Lesson 09</div>
      </Link>
      <Link to="lesson-10">
        <div>Lesson 10</div>
      </Link>
      <Link to="lesson-11">
        <div>Lesson 11</div>
      </Link>
      <Link to="lesson-12">
        <div>Lesson 12</div>
      </Link>
      <Link to="form_gender">
        <div>Gender</div>
      </Link>
    </div>
  );
}

export default HomePage;
