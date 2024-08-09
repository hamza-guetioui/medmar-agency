import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import LinkButton from "./LinkButton";

import styles from "./Styles.module.css";

function Index() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <Title />
        <LinkButton />
      </div>
      <Paragraph />
    </div>
  );
}

export default Index;
