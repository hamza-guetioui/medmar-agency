import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import LinkButton from "./LinkButton";

import styles from './Styles.module.css'

function Index() {
  return (
    <div className={styles.Header}>
      <div>
        <Title />
        <Paragraph />
      </div>
      <LinkButton />
    </div>
  );
}

export default Index;
