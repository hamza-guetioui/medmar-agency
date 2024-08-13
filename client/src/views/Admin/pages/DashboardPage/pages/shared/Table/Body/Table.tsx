import React from "react";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Table = ({ children }: Props) => {
  return (
    <section className={styles.table__body}>
      <table className={styles.Table}>{children}</table>
    </section>
  );
};

export default Table;
