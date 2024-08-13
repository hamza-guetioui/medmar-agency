import React from "react";
import styles from "./Styles.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const index = ({ title, children }: Props) => {
  return (
    <div className={styles.Section}>
      <h6 className={styles.sectionTitle}>{title}</h6>

      <div className={styles.sectionFields}>{children}</div>
    </div>
  );
};

export default index;
