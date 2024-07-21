"use client";
import React from "react";
import styles from "./Styles.module.css";
import { useScrollContext } from "../scrollContext";

function Title() {
  const { activeValue } = useScrollContext();
  return <h1 className={styles.Title}>{activeValue}</h1>;
}

export default Title;
