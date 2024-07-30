import React from "react";
import Navigation from "./Navigation";
import Service from "./Service";

import styles from "./Styles.module.css";

import HandleClickProvider from "./context/handleClickContext";

function Index() {
  return (
    <HandleClickProvider>
      <div className={styles.Container}>
        <Navigation />
        <Service />
      </div>
    </HandleClickProvider>
  );
}

export default Index;
