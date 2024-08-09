import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";

interface StarsProps {
  number: number;
}

const Stars: React.FC<StarsProps> = ({ number }) => {
  const stars = [];

  for (let i = 0; i < number; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  return <div className={styles.Stars}>{stars}</div>;
};

export default Stars;
