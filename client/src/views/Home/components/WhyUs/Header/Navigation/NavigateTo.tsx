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
  const active = useMemo(() => reason === activeValue, [reason, activeValue]);
  const { targetRef } = useScrollContext();

  const handleScrollTo = () => {
    setActiveValue(reason);
    if (targetRef.current) {
      targetRef.current.scrollTo({
        top: id * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <li className={`${styles.ButtonWrapper} ${active ? styles.active : ""}`}>
      <button
        className={`${styles.Button} ${active ? styles.ButtonActive : ""}`}
        onClick={handleScrollTo}
      >
        {reason}
      </button>
      <span className={styles.leftShape}></span>
    </li>
  );
};

export default NavigateTo;
