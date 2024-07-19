"use client";
import React, { useState } from "react";

interface PlayButtonProps {
  videoRef: React.RefObject<HTMLVideoElement>; // Type for the videoRef prop
}

const PlayButton: React.FC<PlayButtonProps> = ({ videoRef }) => {
  const [played, setIsPlayed] = useState(false);

  function playVideo() {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlayed(true);
    }
  }
  return (
    <>
      {!played && (
        <button
          onClick={playVideo}
          className="bg-white p-4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  "
        >
          Play
        </button>
      )}
    </>
  );
};

export default PlayButton;
