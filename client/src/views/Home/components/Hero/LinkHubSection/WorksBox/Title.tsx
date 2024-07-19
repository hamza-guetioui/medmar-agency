import React from "react";
import styles from "./Styles.module.css";

function Title() {
  return (
    <h2 className={styles.Title}>
      <span className="block text-sm -mb-4 pl-1">Elevate Your Brand</span>
      <span className="text-6xl font-bold font-sans">Now</span>
    </h2>
  );
}

export default Title;
