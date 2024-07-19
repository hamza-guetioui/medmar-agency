"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Styles.module.css";
import CloseButton from "./CloseButton";

// handle click context
import { useHandleClick } from "../context";

function VideoPlayer() {
  const { showVideo } = useHandleClick();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!showVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showVideo]);

  return (
    <div className={styles.VideoPlayer}>
      <CloseButton />
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        autoPlay={showVideo}
        preload="none"
        poster="/path/to/posterImage.jpg"
      >
        <source src="/videos/introVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
