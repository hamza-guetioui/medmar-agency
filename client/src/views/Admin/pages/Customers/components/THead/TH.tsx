import React from "react";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

const TH = ({ children }: Props) => {
  return <th className={styles.TH}>{children}</th>;
};

export default TH;
