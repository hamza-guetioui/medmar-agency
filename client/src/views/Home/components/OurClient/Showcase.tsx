import React from "react";
import styles from "./Styles.module.css";
import Slider from "./Slider";
function Showcase() {
  return (
    <div className={styles.Wrapper}>
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default Showcase;

