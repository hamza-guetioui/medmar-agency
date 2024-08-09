"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

import { reasons } from "../../data";

// Define the type for the ScrollContext value
interface ScrollContextTypes {
  activeValue: number;
  setActiveValue: React.Dispatch<React.SetStateAction<number>>;
  targetRef: React.RefObject<HTMLDivElement>;
}

// Create a Context for scroll information with default values
const ScrollContext = createContext<ScrollContextTypes | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeValue, setActiveValue] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const handleScroll = () => {
      if (targetRef.current) {
        // Get the top position of the target element relative to the viewport
        const targetElement = targetRef.current;

        // TypeScript will now correctly infer the type of targetElement as HTMLDivElement
        const targetTop = targetElement.getBoundingClientRect().top;

        // Calculate the current scroll position offset, centering the target element
        const currentScrollY = -targetTop + window.innerHeight / 2;

        // Clamp the scroll position within bounds, adjusting for page length and viewport height
        const clampedScrollY = Math.max(
          0,
          Math.min(
            (reasons.length - 1) * 100,
            Math.floor(currentScrollY / window.innerHeight) * 100
          )
        );

        // Calculate active index based on scroll position
        const activeIndex = Math.floor(clampedScrollY / 100);
        if (activeIndex >= 0 && activeIndex < reasons.length) {
          setActiveValue(reasons[activeIndex].id);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveValue]);

  return (
    <ScrollContext.Provider value={{ activeValue, setActiveValue, targetRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the ScrollContext
export const useScrollContext = (): ScrollContextTypes => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
