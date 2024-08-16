"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

interface InputProps {
  v: string;
  handleC: (event: React.ChangeEvent<HTMLInputElement>) => void;
  length: number;
}

function index({ length, v, handleC }: InputProps) {
  const [value, setValue] = useState<string>(v);

  const style = {
    color: value.length === length ? " #e2e8f0" : " #64748b",
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    handleC(event);
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
      <div className={styles.inputWrapper}>
        <input
          placeholder="Customer Name..."
          className={styles.Input}
          value={value}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />

        <span className={styles.lengthCounter} style={style}>
          {value.length}/{length}
        </span>
      </div>
    </div>
  );
}

export default index;
