import React from "react";
import Title from "./Title";
import styles from "./Styles.module.css";
import NavigationList from "./NavigationList";

function Index() {
  return (
    <div className={styles.Container}>
      <Title />
      <NavigationList />
    </div>
  );
}

export default Index;
