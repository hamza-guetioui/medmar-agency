"use client";
import React from "react";
import styles from "./Styles.module.css";
import Reason from "./Reason";
import { useScrollContext } from "../scrollContext";
import { reasons } from "../data";

function Index() {
  const { activeValue } = useScrollContext();

  // Filter reasons to find the one that matches the activeValue
  const filteredReasons = reasons.filter((reason) => reason.id === activeValue);

  // Take the first item from the filtered reasons if it exists
  const reasonToDisplay =
    filteredReasons.length > 0 ? filteredReasons[0] : null;
  return (
    <div className={styles.Container}>
      {reasonToDisplay ? (
        <Reason
          key={reasonToDisplay.id}
          title={reasonToDisplay.title}
          description={reasonToDisplay.description}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
