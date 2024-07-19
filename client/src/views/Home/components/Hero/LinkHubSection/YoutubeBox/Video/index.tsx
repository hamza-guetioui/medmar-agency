"use client";
import React from "react";
import styles from "./Styles.module.css";
import VideoPlayer from "./VideoPlayer";

// handle click context
import { useHandleClick } from "../context";

const Index = () => {
  const { showVideo } = useHandleClick();

  return (
    <div className={`${styles.Container} ${showVideo ? "" : "hidden"}`}>
      <VideoPlayer />
    </div>
  );
};

export default Index;
