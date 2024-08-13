import React from "react";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Index = ({ children }: Props) => {
  return (
    <section className={styles.TableWrapper}>
      <table className={styles.Table}>{children}</table>
    </section>
  );
};

export default Index;
