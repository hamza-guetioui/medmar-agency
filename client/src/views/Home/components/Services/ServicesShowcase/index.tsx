import React from "react";
import Navigation from "./Navigation";
import OurServices from "./OurServices";
import styles from "./Styles.module.css";

import HandleClickProvider from "./context";

function Index() {
  return (
    <HandleClickProvider>
      <div className={styles.Container}>
        <Navigation />
        <OurServices />
      </div>
    </HandleClickProvider>
  );
}

export default Index;
