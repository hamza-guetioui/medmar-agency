import React from "react";
import styles from "./Styles.module.css";

type Props = {
  title: string;
  paragraph: string;
};

function Header({ title, paragraph }: Props) {
  return (
    <div className={styles.Header}>
      <h1 className={styles.Title}>{title}</h1>
      <p className={styles.Paragraph}>{paragraph}</p>
    </div>
  );
}

export default Header;
