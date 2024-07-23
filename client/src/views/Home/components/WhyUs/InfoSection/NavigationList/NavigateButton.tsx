"use client";
import React, { useMemo } from "react";
import styles from "./Styles.module.css";
import { useScrollContext } from "../../scrollContext";

interface NavigateToProps {
  id: number;
  reason: string;
}

const NavigateTo: React.FC<NavigateToProps> = ({ id, reason }) => {
  const { activeValue, setActiveValue } = useScrollContext();
  const active = useMemo(() => id === activeValue, [id, activeValue]);

  const scrollTo = () => {
    setActiveValue(id);
  };

  return (
    <li className={`${styles.navigateButton} ${active ? styles.active : ""}`}>
      <span className={styles.circleDot}></span>

      <button className={styles.button} onClick={scrollTo}>
        {reason}
      </button>
    </li>
  );
};

export default NavigateTo;
