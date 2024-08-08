"use server";
import React from "react";
import styles from "./Styles.module.css";

import Title from "./Title";
import Buttons from "./Buttons";

type FormProps = {
  title: string;
  children: React.ReactNode;
};

function Form({ title, children }: FormProps) {
  return (
    <>
      <Title>{title}</Title>
      <div className={styles.Inputs}>{children}</div>

      <Buttons />
    </>
  );
}

export default Form;
