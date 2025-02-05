import { Link } from "react-router-dom";
import styles from "./componenetenPage.module.css";
import ChangeTitel from "../components/changeTitelDocumentitel/ChangeTitel";

function ComponentenPage(): JSX.Element {
  return (
    <div className={styles.gridContainer}>
      <Link to="/changetitle">
        <div>{/* <ChangeTitel /> */}</div>
      </Link>
    </div>
  );
}
export default ComponentenPage;
