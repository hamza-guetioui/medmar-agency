"use client";

import styles from "./Styles.module.css";

import { useScrollContext } from "./context/scrollContext";

type Props = { children: React.ReactNode };

function Container({ children }: Props) {
  const { targetRef } = useScrollContext();

  return (
    <div className={styles.Wrapper} ref={targetRef}>
      <div className={styles.Container}>{children}</div>
    </div>
  );
}

export default Container;
