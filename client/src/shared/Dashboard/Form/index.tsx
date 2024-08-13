import React from "react";
import styles from "./Styles.module.css";

import Buttons from "./Buttons";

type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  return (
    <form className={styles.Form}>
      {children}

      <Buttons />
    </form>
  );
}

export default Form;
