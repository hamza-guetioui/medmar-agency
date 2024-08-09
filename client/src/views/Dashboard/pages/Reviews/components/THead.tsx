import React from "react";
import styles from "./Styles.module.css";

type Props = {};

const THead = (props: Props) => {
  return (
    <thead className={styles.THead}>
      <tr>
        <th className={styles.th}></th>
        <th className={styles.th}>name</th>
        <th className={styles.th}>job</th>
        <th className={styles.th}>rate</th>
        <th className={styles.th}>comment</th>
        <th className={styles.th}></th>
      </tr>
    </thead>
  );
};

export default THead;
