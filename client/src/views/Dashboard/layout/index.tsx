import React from "react";

import styles from "./Styles.module.css";
import Navigation from "./Navigation";
import Content from "./Content";

type Props = {
  children: React.ReactNode;
};

function Index({ children }: Props) {
  return (
    <div className={styles.Container}>
      <Navigation />
      <Content>{children}</Content>
    </div>
  );
}

export default Index;
