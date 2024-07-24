import React from "react";
import Content from "./Content";
import Header from "./Header";
import styles from "./Styles.module.css";
import { ScrollProvider } from "./scrollContext";

function index() {
  return (
    <ScrollProvider>
      <div className={styles.Container}>
        <div className="max-w-6xl mx-auto ">
          <Header />
          <Content />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default index;
