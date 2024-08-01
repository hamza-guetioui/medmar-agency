import React from "react";
import styles from "./Styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
};

const ToggleButton = ({ isOpen, handleClick }: Props) => {
  return (
    <button
      className={`${styles.ToggleButton} ${
        !isOpen ? "bg-white opacity-70" : "bg-slate-300/70 "
      }`}
      onClick={() => handleClick()}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default ToggleButton;
