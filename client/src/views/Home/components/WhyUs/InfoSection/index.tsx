import React from "react";
import Title from "./Title";
import styles from "./Styles.module.css";
import Paragraph from "./Paragraph";

type Props = {
  children?: React.ReactNode;
};

function Index({ children }: Props) {
  return (
    <div className={styles.Container}>
      <Title />
      <Paragraph />
      {children}
    </div>
  );
}

export default Index;
