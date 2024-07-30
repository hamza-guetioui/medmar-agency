import React from "react";
import Intro from "./Intro";
import Showcase from "./Showcase";
import styles from "./Styles.module.css";

function Index() {
  return (
    <div className={styles.Container}>
      <Intro />
      <Showcase />
    </div>
  );
}

export default Index;
