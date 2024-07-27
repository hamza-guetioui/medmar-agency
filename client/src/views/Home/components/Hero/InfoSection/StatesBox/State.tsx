import React from "react";
import styles from "./Styles.module.css";

interface StateProps {
  count: number;
  label: string;
}

const State: React.FC<StateProps> = ({ count, label }) => {
  return (
    <div className={styles.State}>
      <h6 className={styles.Count}>{`+${count}`}</h6>
      <p className={styles.Label}>{label}</p>{" "}
    </div>
  );
};

export default State;
