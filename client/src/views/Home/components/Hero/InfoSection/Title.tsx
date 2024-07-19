import React from "react";
import styles from "./Styles.module.css";

function Index() {
  return (
    <h1 className={styles.Title}>
      <span className={styles.SubTitle1}>Marketing</span>
      <span className={styles.SubTitle2}>
        <span >Excellence</span>
        {" Agency"}
      </span>
    </h1>
  );
}

export default Index;
