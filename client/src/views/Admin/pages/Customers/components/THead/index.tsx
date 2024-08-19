import React from "react";
import styles from "./Styles.module.css";
import TH from "./TH";


const Index = () => {
  return (
    <thead className={styles.THead}>
      <tr>
        <TH>{""}</TH>
        <TH>full name</TH>
        <TH>job title</TH>
        <TH>testimonial</TH>
        <TH>rating</TH>
        <TH>isPublished</TH>
        <TH>{""}</TH>
      </tr>
    </thead>
  );
};

export default Index;
