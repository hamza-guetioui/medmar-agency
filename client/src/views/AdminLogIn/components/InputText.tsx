import React from "react";
import styles from "./Styles.module.css";

type Props = {
  value: string;
  onChange: (e: any) => void;
};

const InputText = ({ value, onChange }: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.Label}>username : </label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name="username"
        className={styles.Input}
        placeholder="entry the username"
      />
    </div>
  );
};

export default InputText;
