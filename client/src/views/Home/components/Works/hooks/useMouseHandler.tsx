import React, { useRef } from "react";

function useMouseHandler() {
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const showcase = showcaseRef.current;

    if (showcase) {
      showcase.dataset.isDown = "true";
      showcase.dataset.startX = (event.pageX - showcase.offsetLeft).toString();
      showcase.dataset.scrollLeft = showcase.scrollLeft.toString();
    }
  };

  const handleMouseLeave = () => {
    const showcase = showcaseRef.current;
    if (showcase) {
      showcase.dataset.isDown = "false";
    }
  };

  const handleMouseUp = () => {
    const showcase = showcaseRef.current;
    if (showcase) {
      showcase.dataset.isDown = "false";
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const showcase = showcaseRef.current;
    if (showcase && showcase.dataset.isDown === "true") {
      event.preventDefault();
      const x = event.pageX - showcase.offsetLeft;
      const walk = (x - Number(showcase.dataset.startX)) * 2; // Adjust scroll speed
      showcase.scrollLeft = Number(showcase.dataset.scrollLeft) - walk;
    }
  };

  return {
    showcaseRef,
    handleMouseLeave,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
  };
}

export default useMouseHandler;