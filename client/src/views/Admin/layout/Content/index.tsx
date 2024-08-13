import React from "react";
import Path from "./Path";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

const index = ({ children }: Props) => {
  return (
    <main className={styles.Container}>
      <Path />
      <>
        {children}
      </>
      
    </main>
  );
};

export default index;
