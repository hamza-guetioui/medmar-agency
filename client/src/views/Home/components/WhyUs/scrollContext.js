"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();

const reasons = [
  { id: 1, title: "Experienced Professionals" },
  { id: 2, title: "Customized Solutions" },
  { id: 3, title: "Proven Track Record" },
  { id: 4, title: "Affordable Pricing" },
  { id: 5, title: "Excellent Customer Support" },
];

export const ScrollProvider = ({ children }) => {
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [activeValue, setActiveValue] = useState("");
    const targetRef = useRef(null);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const handleScroll = () => {
            if (targetRef.current) {
                const targetTop = targetRef.current.getBoundingClientRect().top;
                const currentScrollY = -targetTop + window.innerHeight / 2;
                const clampedScrollY = Math.max(
                    0,
                    Math.min(
                        (reasons.length - 1) * 100,
                        Math.floor(currentScrollY / window.innerHeight) * 100
                    )
                );
                setScrollPositionY(clampedScrollY);

                // Calculate active index based on scroll position
                const activeIndex = Math.floor(clampedScrollY / 100);
                if (activeIndex >= 0 && activeIndex < reasons.length) {
                    setActiveValue(reasons[activeIndex].title);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setActiveValue]);

    return (
        <ScrollContext.Provider value={{ scrollPositionY, activeValue, setActiveValue, targetRef }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    return useContext(ScrollContext);
};