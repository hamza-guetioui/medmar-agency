import React from "react";

// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles.module.css";

type Props = {
  value: number;
  increment: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  decrement: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function DigitAdjuster({ value, increment, decrement }: Props) {
  return (
    <div className={styles.DigitAdjuster}>
      <button
        onClick={(event) => decrement(event)}
        className={`${styles.Btn} ${value <= 0 ? "opacity-30" : ""}`}
        disabled={value <= 0}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <button
        onClick={(event) => increment(event)}
        className={`${styles.Btn} ${value === 5 ? "opacity-50" : ""}`}
        disabled={value >= 5}
      >
        <FontAwesomeIcon icon={faPlus} />{" "}
      </button>
    </div>
  );
}

export default DigitAdjuster;
