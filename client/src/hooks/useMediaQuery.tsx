"use client"
import { useState, useEffect } from "react";


const useMediaQuery = ( mq : string) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mq);

    // Update the match state based on the initial media query match
    setIsMatch(mediaQuery.matches);

    const handleChange = () => {
      setIsMatch(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMatch;
};

export default useMediaQuery;
