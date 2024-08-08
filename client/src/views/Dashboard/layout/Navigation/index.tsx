"use client";
import React, { useState, useEffect } from "react";

import styles from "./Styles.module.css";
import ToggleButton from "./ToggleButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";

function Navigation() {
  const isMatch = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(isMatch);
  }, [isMatch]);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={styles.Container}>

      <ToggleButton handleClick={handleToggle} isOpen={isOpen} />

      {isOpen && (
        <aside className={styles.Navigation}>
          <h3 className="font-bold text-xl"> Dashboard</h3>
          <ul className={styles.ServicesList}>
            <li>
              <Link rel="stylesheet" href="/admin/dashboard/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" href="/admin/dashboard/works">
                Works
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
}

export default Navigation;
