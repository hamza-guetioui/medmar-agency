import React from "react";

import styles from "./Styles.module.css";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Content from "./Content";

type Props = {
  children: React.ReactNode;
};

function Index({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className={styles.Container}>
        <Navigation />
        <Content>{children}</Content>
      </div>
    </>
  );
}

export default Index;
