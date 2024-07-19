import React from "react";

import styles from "./Styles.module.css";

function Services() {
  return (
    <section className={styles.Services}>
      <h2 className={styles.title}>Services</h2>
      <ul>
        <li className={styles.Item}>Web Development</li>
        <li className={styles.Item}>Digital Marketing</li>
        <li className={styles.Item}>Branding Design</li>
        <li className={styles.Item}>Photograph</li>
        <li className={styles.Item}>UI/UX Design</li>
      </ul>
    </section>
  );
}

export default Services;
