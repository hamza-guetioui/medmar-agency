"use client";

import styles from "./Styles.module.css";
import Header from "./Header";
import Content from "./Content";
import { useScrollContext } from "./scrollContext";

const reasons = [
  {
    id: 1,
    title: "Experienced Professionals",
  },
  {
    id: 2,
    title: "Customized Solutions",
  },
  {
    id: 3,
    title: "Proven Track Record",
  },
  {
    id: 4,
    title: "Affordable Pricing",
  },
  {
    id: 5,
    title: "Excellent Customer Support",
  },
];

function Wrapper() {
  const { targetRef } = useScrollContext();

  return (
    <div className={styles.Wrapper} ref={targetRef}>
      <div className={styles.Container}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default Wrapper;
