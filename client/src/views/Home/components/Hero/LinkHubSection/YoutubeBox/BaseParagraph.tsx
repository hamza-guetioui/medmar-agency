import React from "react";
import styles from "./Styles.module.css";
import VisiteLink from "./VisiteLink";

function BaseParagraph() {
  return (
    <div className={styles.BaseParagraph}>
      <p >Ready to transform your brand?</p>
      <p> Watch our video for insights.</p>
      <p >Visit <VisiteLink/> for more!</p>
    </div>
  );
}

export default BaseParagraph;
