import React from "react";
import styles from "./Styles.module.css";


const THead = () => {
  return (
    <thead className={styles.THead}>
      <tr>
        <th className={styles.th}></th>
        <th className={styles.th}>title</th>
        <th className={styles.th}>description</th>
        <th className={styles.th}>image</th>
        <th className={styles.th}>video</th>
        <th className={styles.th}>video description</th>
        <th className={styles.th}>additional info</th>
        <th className={styles.th}></th>

      </tr>
    </thead>
  );
};

export default THead;
