"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";
import DigitAdjuster from "./DigitAdjuster";

interface InputProps {
  label?: string;
  name: string;
  span?: string;
  initialValue?: number;
  min?: number;
  max?: number;
  required?: boolean;
}

function Index({
  name,
  label,
  min,
  max,
  required = false,
  initialValue = 0,
}: InputProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number.parseFloat(event.target.value));
  };

  const increment = () => {
    setValue((currentValue) => parseFloat((currentValue + 0.1).toFixed(1)));
  };

  const decrement = () => {
    setValue((currentValue) => parseFloat((currentValue - 0.1).toFixed(1)));
  };

  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>

      <div className={styles.Wrapper}>
        <input
          className={styles.Input}
          value={value}
          type="number"
          step={0.1}
          min={min}
          max={max}
          name={name}
          onChange={handleChange}
          required={required}
        />

        <DigitAdjuster
          value={value}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
}

export default Index;
