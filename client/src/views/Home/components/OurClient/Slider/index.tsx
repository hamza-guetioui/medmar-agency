import React from "react";
import styles from "./Styles.module.css";
import Item from "./Item";

function Index() {
  return (
    <div className={styles.Slider}>
      <div className={styles.SliderInner}>
        <Item>FaceBook</Item>
        <Item>Instagram</Item>
        <Item>Twitter</Item>
        <Item>Whatsapp</Item>
        <Item>Figma</Item>
      </div>
      <div className={styles.SliderInner}>
      <Item>FaceBook</Item>
        <Item>Instagram</Item>
        <Item>Twitter</Item>
        <Item>Whatsapp</Item>
        <Item>Figma</Item>
      </div>
    </div>
  );
}

export default Index;
