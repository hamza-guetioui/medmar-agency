"use client";
import React, { useState, useEffect } from "react";

import styles from "./Styles.module.css";
import ToggleButton from "./ToggleButton";
import Service from "./Service";
import { services } from "../../data";

interface ServiceTypes {
  id: number;
  title: string;
  link: string;
}

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsOpen(mediaQuery.matches);
    // Event listener => when screen size changes
    const handleResize = () => {
      setIsOpen(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles.Container}>
      <ToggleButton handleClick={handleToggle} isOpen={isOpen} />
      {isOpen && (
        <aside className={styles.Navigation}>
          <h3 className="font-extrabold text-2xl"> Services List</h3>
          <ul className={styles.ServicesList}>
            {services.map((service: ServiceTypes) => {
              return (
                <Service key={service.id} link={service.link}>
                  {service.title}
                </Service>
              );
            })}
          </ul>
        </aside>
      )}
    </div>
  );
}

export default Navigation;
