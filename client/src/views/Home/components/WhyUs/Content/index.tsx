import React from "react";
import styles from "./Styles.module.css";
import Title from "./Title";
import Button from "./Button";
import Paragraph from "./Paragraph";

function Index() {
  return (
    <div className={styles.Content}>
      <Title />
      <Paragraph />
      <Button />
    </div>
  );
}

export default Index;
