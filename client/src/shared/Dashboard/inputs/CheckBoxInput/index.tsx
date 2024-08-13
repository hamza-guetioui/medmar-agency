"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

interface Props {
  label?: string;
  name: string;
  initialValue?: boolean;
}

function Index({ name, label, initialValue = false }: Props) {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.checked);
  }

  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={value}
      />
      <label className={styles.Label}>{label || name}</label>
    </div>
  );
}

export default Index;
