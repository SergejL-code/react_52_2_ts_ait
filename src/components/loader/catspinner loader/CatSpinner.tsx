import React from "react";
import { motion } from "framer-motion";
import styles from "./catspinner.module.css";

const CatSpinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616554.png"
          alt="Cat"
          className={styles.catImage}
        />
      </motion.div>
    </div>
  );
};

export default CatSpinner;
