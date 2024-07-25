"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./Styles.module.css";
import Item from "./Item";
import useMouseHandler from "./useMouseHandler";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33F6",
  "#33FFF3",
  "#F633FF",
];

const Showcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    showcaseRef,
    handleMouseLeave,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
  } = useMouseHandler();

  useEffect(() => {
    const element = showcaseRef.current;

    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing after the element becomes visible
            observer.unobserve(element);
          }
        },
        { threshold: 0.4 } // 40% of the element must be visible
      );

      observer.observe(element);

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, []);

  return (
    <div
      className={`${styles.Showcase} ${isVisible ? styles.Visible : ""}`} // Apply the class when visible
      ref={showcaseRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {colors.map((color, index) => (
        <Item key={index} color={color} />
      ))}
    </div>
  );
};

export default Showcase;
