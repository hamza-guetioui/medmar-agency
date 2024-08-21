"use client";
import Link from "next/link";
import React, { useState , useEffect } from "react";

import styles from "./Styles.module.css";
import ToggleButton from "./ToggleButton";
import useMediaQuery from "@/hooks/useMediaQuery";

function Navigation() {
  const isMatch = useMediaQuery("(min-width: 768px)")
  const [isOpen, setIsOpen] = useState<boolean>(isMatch);
  useEffect(()=>{
    setIsOpen(isMatch)
  },[isMatch])

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

          <Link href="/projects" className={styles.Link}>
            projects
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
