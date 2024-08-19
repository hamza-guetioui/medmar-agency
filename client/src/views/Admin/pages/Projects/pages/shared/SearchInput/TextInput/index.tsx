"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

interface InputProps {
  v: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  length: number;
  inputRef: React.RefObject<HTMLInputElement>;
}

function index({ length, v, onChange, inputRef }: InputProps) {
  const inputValueLength = inputRef.current?.value.length || 0;
  const style = {
    color: inputValueLength === length ? " #e2e8f0" : " #64748b",
  };

  function handelChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key;
    if (key === "Backspace" || key === "Entry") return;
    if (inputValueLength >= length) {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        placeholder="Customer Name..."
        className={styles.Input}
        type="text"
        onChange={handelChange}
        onKeyDown={handleKeydown}
      />

      <span className={styles.lengthCounter} style={style}>
        {inputValueLength}/{length}
      </span>
    </div>
  );
}

export default index;
