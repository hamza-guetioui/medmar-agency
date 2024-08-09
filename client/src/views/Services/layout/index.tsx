import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";

import styles from "./Styles.module.css";

function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.Container}>
      <Navigation />
      <Content>{children}</Content>
    </div>
  );
}

export default Index;
