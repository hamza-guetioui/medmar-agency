import React from "react";

// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles.module.css";

type Props = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

function DigitAdjuster({ value, increment, decrement }: Props) {
  return (
    <div className={styles.DigitAdjuster}>
      <label
        htmlFor="delBtn"
        className={`${styles.Btn} ${value <= 0 ? "opacity-30" : ""}`}
      >
        <input
          id="delBtn"
          type="button"
          onClick={decrement}
          disabled={value <= 0}
          className="opacity-0 w-0 h-0"
        />
        <FontAwesomeIcon icon={faMinus} />
      </label>

      <label
        htmlFor="addBtn"
        className={`${styles.Btn} ${value === 5 ? "opacity-50" : ""}`}
      >
        <input
          id="addBtn"
          type="button"
          onClick={increment}
          disabled={value >= 5}
          className="opacity-0 w-0 h-0"
        />
        <FontAwesomeIcon icon={faPlus} />{" "}
      </label>
    </div>
  );
}

export default DigitAdjuster;
