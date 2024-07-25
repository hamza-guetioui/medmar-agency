import React from "react";
import styles from "./Styles.module.css";
function Item({ children }: { children: React.ReactNode }) {
  return <div className={styles.SliderItem}>{children}</div>;
}

export default Item;
