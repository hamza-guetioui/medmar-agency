"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";

interface TextAriaProps {
  id: string;
  v: string;
  handleC: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  length: number;
}

function Index({ id, v, handleC, length }: TextAriaProps) {
  const [value, setValue] = useState(v);

  const style = {
    color: value.length === length ? " #e2e8f0" : " #64748b",
  };
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
    handleC(event);
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
      <div className={styles.inputWrapper}>
        <textarea
          id={id}
          placeholder="Add feature description"
          className={styles.textAreaInput}
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

export default Index;
