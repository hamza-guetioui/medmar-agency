import React from "react";
import styles from "./Styles.module.css";

type Props = { value: string; onChange: (e: any) => void };

const InputPassword = ({value,onChange}: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.Label}>password : </label>
      <input
      onChange={onChange}
      value={value}
        type="password"
        name="password"
        className={styles.Input}
        placeholder="entry yoour password"
      />
    </div>
  );
};

export default InputPassword;
