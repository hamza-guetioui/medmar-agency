import React from "react";
import styles from "./Styles.module.css";
import TH from "./TH";


const Index = () => {
  return (
    <thead className={styles.THead}>
      <tr>
        <TH>{""}</TH>
        <TH>full name</TH>
        <TH>position</TH>
        <TH>bio</TH>
        <TH>sociel media</TH>
        <TH>{""}</TH>
      </tr>
    </thead>
  );
};

export default Index;
