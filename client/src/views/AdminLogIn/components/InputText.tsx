import React from "react";
import styles from './Styles.module.css'

type Props = {};

const InputText = (props: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.Label}>username : </label>
      <input type="text" name="username" className={styles.Input} placeholder="entry the username" />
    </div>
  );
};

export default InputText;
