"use client"
import React, { useMemo } from "react";
import styles from "./Styles.module.css";
import { useHandleClick } from "../context";

interface NavigateToProps {
  service: string;
}

const NavigateTo: React.FC<NavigateToProps> = ({ service }) => {
  const { activeValue, setActiveValue } = useHandleClick();
  const active = useMemo(() => service === activeValue, [service, activeValue]);

  return (
    <button
      className={`${styles.NavigateButton} ${active ? styles.active : ''}`}
      onClick={() => setActiveValue(service)}
    >
      {service}
      <span className={styles.leftShape}></span>
      <span className={styles.rightShape}></span>
    </button>
  );
};

export default NavigateTo;