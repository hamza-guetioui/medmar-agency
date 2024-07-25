import React from "react";
import styles from "./Styles.module.css";

function Index() {
  return (
    <main>
      <div className={styles.Container}>
        <div className={styles.Slider}>
          <div className={styles.SliderItems}>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
          </div>
          <div className={styles.SliderItems}>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
            <div className={styles.SliderItem}></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
