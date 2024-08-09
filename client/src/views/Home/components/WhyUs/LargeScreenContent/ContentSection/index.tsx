"use client";
import React from "react";
import styles from "./Styles.module.css";
import Reason from "../../Reason";
import { useScrollContext } from "../context/scrollContext";
import { reasons } from "../../data";

function Index() {
  const { activeValue } = useScrollContext();

  const filteredReasons = reasons.filter((reason) => reason.id === activeValue);

  const reason =
    filteredReasons.length > 0 ? filteredReasons[0] : null;

  return (
    <div className={styles.Container}>
      {reason ? (
        <Reason
          key={reason.id}
          title={reason.title}
          description={reason.description}
          image={reason.imageSrc}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
