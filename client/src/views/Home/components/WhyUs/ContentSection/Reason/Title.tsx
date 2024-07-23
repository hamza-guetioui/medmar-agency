import React from "react";
import styles from "./Styles.module.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.Title}>{children}</h1>;
};

export default Title;
