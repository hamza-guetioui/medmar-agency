"use client";
import React, { useState } from "react";
import styles from './Styles.module.css'

interface TextAriaProps {
  name: string;
  label?: string;
  length: number;
  initialValue?: string;
};

function index({ name, label, length, initialValue = "" }: TextAriaProps) {
  const [value, setValue] = useState(initialValue);

  const style = {
    color: value.length === length ? " #e2e8f0" : " #64748b",
  };
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
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
        <textarea
        className={styles.textAreaInput}
          name={name}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
          rows={4}
        />
        <span className={styles.lengthCounter} style={style}>
          {value.length}/{length}
        </span>
      </div>
    </div>
  );
}

export default index;
