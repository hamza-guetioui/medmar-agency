import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";

import styles from "./Styles.module.css";
import Button from "./Button";
import StatesBox from "./StatesBox";

function Index() {
  return (
    <section className={styles.InfoSection}>
      <div>
        <Title />
        <Paragraph />
        <Button />
      </div>

      <StatesBox />
    </section>
  );
}

export default Index;
