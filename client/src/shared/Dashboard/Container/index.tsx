import React from "react";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <main className={styles.Container}>{children}</main>;
};

export default Container;
