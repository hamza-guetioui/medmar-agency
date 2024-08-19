import React from "react";
import styles from "./Styles.module.css";

interface Props {
  id: string;
  type: "radio" | "checkbox";
  title: string;
  checked: boolean;
  handleChange: (event: any) => void;
}

function CheckBoxOption({ id, type, title, handleChange, checked }: Props) {
  return (
    <div className={styles.CheckBoxOption}>
      <input
        className={styles.Input}
        id={id.toString()}
        type={type}
        onChange={handleChange}
        value={title}
        checked={checked}
      />
      <label htmlFor={id.toString()}>{title}</label>
    </div>
  );
}

export default CheckBoxOption;
