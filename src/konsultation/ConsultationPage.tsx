import styles from "./consultation.module.css";

import { Link } from "react-router-dom";

function ConsultationPage() {
  return (
    <div>
      <div className={styles.gridContainer}>
        <Link to="consul-1">
          <div>Consultation 1</div>
        </Link>
        <Link to="consul-2">
          <div>Consultation 2</div>
        </Link>
        <Link to="consul-3">
          <div>Consultation 3</div>
        </Link>
        <Link to="consul-4">
          <div>Consultation 4</div>
        </Link>
        <Link to="/consul-5">
          <div>Consultation 5</div>
        </Link>
      </div>
    </div>
  );
}

export default ConsultationPage;
