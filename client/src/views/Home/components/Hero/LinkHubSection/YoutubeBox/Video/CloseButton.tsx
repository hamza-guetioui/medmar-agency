"use client";
import React from "react";
import styles from "./Styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// handle click context
import { useHandleClick } from "../context";
function CloseButton() {
  const { setShowVideo } = useHandleClick();
  return (
    <button className={styles.CloseButton} onClick={() => setShowVideo(false)}>
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
}

export default CloseButton;
