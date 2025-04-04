"use client";
import React from "react";
import styles from "./Styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { useHandleClick } from "./context";
import Video from "./Video";

const WatchButton = () => {
  const { setShowVideo } = useHandleClick();
  return (
    <>
      <button className={styles.PlayVideo} onClick={() => setShowVideo(true)}>
        <FontAwesomeIcon icon={faPlay} />
        <span className="hidden font-bold sm:ml-2 sm:block">
          Watch Video
        </span>{" "}
      </button>
      <Video />
    </>
  );
};

export default WatchButton;
