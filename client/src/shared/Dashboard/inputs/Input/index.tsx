"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

interface InputProps {
  type: string;
  label?: string;
  name: string;
  length: number;
  required?: boolean;
  initialValue?: string;
  pattern?: string;
}

function index({
  type,
  name,
  label,
  length,
  required = false,
  pattern,
  initialValue = "",
}: InputProps) {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const style = {
    color: value.length === length ? " #e2e8f0" : " #64748b",
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key;
    if (key === "Backspace" || key === "Entry") return;
    if (value.length >= length) {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.Input}
          value={value}
          type={type}
          name={name}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          required={required}
          pattern={pattern}
        />

        <span className={styles.lengthCounter} style={style}>
          {value.length}/{length}
        </span>
      </div>
    </div>
  );
}

export default index;
