"use client";

import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import Project from "./Project";
import useMouseHandler from "../hooks/useMouseHandler";
import {  IProjectData } from "@/Types";

type Props = {
  projects: IProjectData[];
};

const Showcase = ({ projects }: Props) => {
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
  }, [showcaseRef]);

  return (
    <div
      className={`${styles.Showcase} ${isVisible ? styles.Visible : ""}`} // Apply the class when visible
      ref={showcaseRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {projects.map(({ _id, title, description, previewImage }) => (
        <Project
          key={_id.toString()}
          title={title}
          description={description}
          image={previewImage}
        />
      ))}
    </div>
  );
};

export default Showcase;
