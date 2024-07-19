import React from "react";
import styles from "./Styles.module.css";
import LinkButton from "./LinkButton";
import Title from "./Title";

function WorksBox() {
  return (
    <div className={styles.WorksBox}>
      <div className={styles.Head}>
        <span className={styles.Portflio}>Portflio</span>
        <LinkButton />
      </div>

      <div className={styles.Base}>
        <Title />
        <p className={styles.Paragraph}>
          <span className="block">Transform your brand.</span>
          <span className="block">Explore our portfolio.</span>
        </p>
      </div>
    </div>
  );
}

export default WorksBox;
