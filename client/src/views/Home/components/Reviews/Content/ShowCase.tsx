"use client";
import React from "react";
import styles from "./Styles.module.css";
import { useScroll } from "../scrollContext";

type Props = {
  children: React.ReactNode;
};

const ShowCase = ({ children }: Props) => {
  const { scrollRef } = useScroll();
  return (
    <div className={styles.Container} ref={scrollRef}>
      {children}
    </div>
  );
};

export default ShowCase;
