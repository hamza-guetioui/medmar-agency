import React from "react";
import styles from "./Styles.module.css";
import VisiteLink from "./VisiteLink";

function LinkButton() {
  return (
    <button className={styles.LinkButton}>
      <VisiteLink />
    </button>
  );
}

export default LinkButton;
