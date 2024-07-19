"use client";
import React from "react";
import styles from "./Styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { useHandleClick } from "./context";

const WatchButton = () => {
  const {setShowVideo} = useHandleClick();
  return (
    <button className={styles.PlayVideo} onClick={() => setShowVideo(true)}>
      <FontAwesomeIcon icon={faPlay} />
      <span className="ml-2">Watch Video</span>{" "}
    </button>
  );
};

export default WatchButton;
