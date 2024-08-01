"use client";
import Link from "next/link";
import React, { useState , useEffect } from "react";

import styles from "./Styles.module.css";
import ToggleButton from "./ToggleButton";

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
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <div className={styles.NavContainer}>
      <ToggleButton isOpen={isOpen} handleClick={handleToggle} />

      {isOpen && (
        <nav className={styles.Navigation}>
          <Link href="/" className={styles.Link}>
            Home
          </Link>

          <Link href="/services" className={styles.Link}>
            Services
          </Link>

          <Link href="/about" className={styles.Link}>
            Who We Are ?
          </Link>

          <Link href="/works" className={styles.Link}>
            Works
          </Link>

          <Link href="/blogs" className={styles.Link}>
            Blogs
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
