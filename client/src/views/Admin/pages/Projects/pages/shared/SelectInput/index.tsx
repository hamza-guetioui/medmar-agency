"use client";
import React from "react";
import styles from "./Styles.module.css";
import CheckBoxOption from "./CheckBoxOption";

import useHandleCheck from "./hooks/useHandleCheck";
import { IProjectServices } from "@/Types";

interface Props {
  id: string;
  type: "checkbox" | "radio";
  name: string;
  label?: string;
  data: Array<{
    id: string;
    title: string;
  }>;

  initialValue?:[IProjectServices];
}

function Index({ type, name, label, data, initialValue = [] }: Props) {
  const [value, handleCheckbox, handleRadio] = useHandleCheck(initialValue);

  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>
      <input type="hidden" name={name} value={JSON.stringify(value)} />

      <div className={styles.checkboxWrapper}>
        {data.map((item) => {
          const checked = value.some((obj) => obj.id === item.id);
          return (
            <CheckBoxOption
              type={type}
              key={item.id}
              id={item.id}
              title={item.title}
              handleChange={type === "checkbox" ? handleCheckbox : handleRadio}
              checked={checked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
