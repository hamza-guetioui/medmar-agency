import React from "react";
import styles from "./Styles.module.css";
import TH from "./TH";


const Index = () => {
  return (
    <thead className={styles.THead}>
      <tr>
        <TH>{""}</TH>
        <TH>title</TH>
        <TH>description</TH>
        <TH>link</TH>
        <TH>Details</TH>
        <TH>{""}</TH>
      </tr>
    </thead>
  );
};

export default Index;
