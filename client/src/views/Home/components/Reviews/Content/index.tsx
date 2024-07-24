"use client";
import React, { useRef } from "react";
import Card from "./Card";
import styles from './Styles.module.css';

import {useScroll} from "../scrollContext"

function Index() {
  const { scrollRef } = useScroll()
  return (
    <div className={styles.Container} ref={scrollRef}>
      <div className="snap-center">
        <Card />
      </div>
      <div className="snap-center">
        <Card />
      </div>
      <div className="snap-center">
        <Card />
      </div>
      <div className="snap-center">
        <Card />
      </div>
      <div className="snap-center">
        <Card />
      </div>
      <div className="snap-center">
        <Card />
      </div>
    </div>
  );
}

export default Index;
