"use client";
import React, { useEffect, useState } from "react";
import LargeScreenContent from "./LargeScreenContent";
import MediumScreenContent from "./MediumScreenContent";

function Index() {
  // Initialize directly based on current window width
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // Event listener => when screen size changes
    const handleResize = () => {
      setIsMedium(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMedium ? <MediumScreenContent /> : <LargeScreenContent />;
}

export default Index;
