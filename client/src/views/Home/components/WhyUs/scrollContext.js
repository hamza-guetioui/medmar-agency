"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { reasons } from './data'

// Create a Context for scroll information
const ScrollContext = createContext();


export const ScrollProvider = ({ children }) => {
    const [activeValue, setActiveValue] = useState(0);
    const targetRef = useRef(null);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const handleScroll = () => {
            if (targetRef.current) {

                // Get the top position of the target element relative to the viewport
                const targetTop = targetRef.current.getBoundingClientRect().top;

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

// Custom hook to use ScrollContext
export const useScrollContext = () => {
    return useContext(ScrollContext);
};