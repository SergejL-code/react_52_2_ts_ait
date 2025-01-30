import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.gridContainer}>
        <Link to="lesson-1">
          <div>Lesson 01</div>
        </Link>
        <Link to="lesson-2">
          <div>Lesson 02</div>
        </Link>
        <Link to="">
          <div>Lesson 03</div>
        </Link>
        <Link to="lesson-4">
          <div>Lesson 04</div>
        </Link>
        <Link to="">
          <div>Lesson 05</div>
        </Link>
        <Link to="">
          <div>Lesson 06</div>
        </Link>
        <Link to="">
          <div>Lesson 07</div>
        </Link>
        <Link to="">
          <div>Lesson 08</div>
        </Link>
        <Link to="">
          <div>Lesson 09</div>
        </Link>
        <Link to="lesson-">
          <div>Lesson 10</div>
        </Link>
        <Link to="">
          <div>Lesson 11</div>
        </Link>
        <Link to="">
          <div>Lesson</div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
