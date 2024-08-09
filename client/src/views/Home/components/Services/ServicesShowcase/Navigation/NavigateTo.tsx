"use client";
import React, { useMemo } from "react";
import styles from "./Styles.module.css";
import { useHandleClick } from "../context/handleClickContext";

interface NavigateToProps {
  id: number;
  children: React.ReactNode;
}

const NavigateTo: React.FC<NavigateToProps> = ({ id, children }) => {
  const { activeValue, setActiveValue } = useHandleClick();

  const active = useMemo(() => {
    return id === activeValue;
  }, [id, activeValue]);

  return (
    <button
      className={`${styles.Button} ${active ? styles.btnActive : ""}`}
      onClick={() => setActiveValue(id)}
    >
      {children}
    </button>
  );
};

export default NavigateTo;
