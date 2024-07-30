import React from "react";
import Header from "./Header"
import Showcase from "./Showcase";
import styles from './Styles.module.css'


function Index() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className=" rotate-3 my-8 ">
        <Showcase />
        <Showcase />
      </div>
    </div>
  );
}

export default Index;
