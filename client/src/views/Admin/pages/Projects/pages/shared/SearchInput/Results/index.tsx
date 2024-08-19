import React, { Children } from "react";
import styles from "./Styles.module.css";
import Customer from "./Customer";

type Props = {
  children: React.ReactNode;
};

const Index = ({ children }: Props) => {
  return <div className={`${styles.ResultsWrapper} `}>{children}</div>;
};

export default Index;
