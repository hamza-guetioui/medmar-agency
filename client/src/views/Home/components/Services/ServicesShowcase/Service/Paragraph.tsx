import React from "react";
import styles from "./Styles.module.css";

interface ParagraphProps {
  children: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.Paragraph}>{children}</p>;
};

export default Paragraph;
