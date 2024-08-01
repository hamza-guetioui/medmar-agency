import React from "react";
import styles from "./Styles.module.css";

interface ParagraphProps {
  text: string;
}

// Define the functional component
function Paragraph({ text }: ParagraphProps) {
  return (
    <p className={styles.Paragraph}>
      {text}
    </p>
  );
}

export default Paragraph;
