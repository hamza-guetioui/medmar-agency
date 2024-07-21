import React from "react";
import styles from "./Styles.module.css";

function Title() {
  return (
    <h1 className={styles.Title}>
      <span className={styles.SubTitle1}>Why We Are</span>
      <span className={styles.SubTitle2}>
        Your <span className="text-primary-color">Best</span> Choose ?
      </span>
    </h1>
  );
}

export default Title;
