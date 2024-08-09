import React from "react";
import styles from "./Styles.module.css";
import Form from "./components/Form";
import Title from "./components/Title";

type Props = {};



const index = (props: Props) => {
  return (
    <main className={styles.Container}>
      <Form />
    </main>
  );
};

export default index;
