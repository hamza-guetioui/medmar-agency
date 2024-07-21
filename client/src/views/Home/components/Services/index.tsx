import React from "react";

import ServicesShowcase from "./ServicesShowcase";
import Header from "./Header";
import styles from './Styles.module.css'

function Index() {
  return (
    <div className={styles.Container}>
      <Header />
      <ServicesShowcase />
    </div>
  );
}

export default Index;
