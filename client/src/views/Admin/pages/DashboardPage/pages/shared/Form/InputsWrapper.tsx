import React from "react";
import styles from './Styles.module.css'

type Props = {
  children: React.ReactNode;
};

const InputsWrapper = ({ children }: Props) => {
  return <div className={styles.InputsWrapper}>{children}</div>;
};

export default InputsWrapper;
