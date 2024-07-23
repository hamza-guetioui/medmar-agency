"use client";

import styles from "./Styles.module.css";
import InfoSection from "./InfoSection";
import ContentSection from "./ContentSection";
import { useScrollContext } from "./scrollContext";

function Wrapper() {
  const { targetRef } = useScrollContext();

  return (
    <div className={styles.Wrapper} ref={targetRef}>
      <div className={styles.Container}>
        <InfoSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default Wrapper;
