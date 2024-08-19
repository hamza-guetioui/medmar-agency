"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

interface TextInputProps {
  id: string;
  v: string;
  handleC: (event: React.ChangeEvent<HTMLInputElement>) => void;
  length: number;

  initialValue?: string;
}

function TextInput({ id, length, v, handleC, initialValue = "" }: TextInputProps) {
  const [value, setValue] = useState<string>(v);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

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

      <div className={styles.inputWrapper}>
        <input
          id={id}
          placeholder="Add detail text"
          className={styles.Input}
          value={value}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeydown}
          required
        />

        <span className={styles.lengthCounter} style={style}>
          {value.length}/{length}
        </span>
      </div>
  );
}

export default TextInput;
