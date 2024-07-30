"use client";

import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import Project from "./Project";
import useMouseHandler from "../hooks/useMouseHandler";

const projects = [
  {
    id: 1,
    title: "Logo Design",
    description: "Crafting unique brand identities.",
    image: "project1.jpeg",
  },
  {
    id: 2,
    title: "Website Redesign",
    description: "Revamping websites for modern appeal.",
    image: "project2.jpeg",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Boosting engagement on social platforms.",
    image: "project3.jpeg",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Building robust online stores.",
    image: "project4.jpeg",
  },
  {
    id: 5,
    title: "Brochure Design",
    description: "Creating informative print materials.",
    image: "project5.jpeg",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Developing user-friendly mobile applications.",
    image: "project6.jpeg",
  },
  {
    id: 7,
    title: "Video Production",
    description: "Producing high-quality video content.",
    image: "project7.jpeg",
  },
  {
    id: 8,
    title: "SEO Optimization",
    description: "Improving search engine rankings.",
    image: "project8.jpeg",
  },
  {
    id: 9,
    title: "Email Marketing",
    description: "Creating effective email campaigns.",
    image: "project9.jpeg",
  },
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
      {projects.map(({ id, title, description, image }) => (
        <Project
          key={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default Showcase;
