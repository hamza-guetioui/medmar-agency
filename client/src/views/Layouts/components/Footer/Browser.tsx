import React from "react";
import Link from "next/link";

import styles from "./Styles.module.css";

function Browser() {
  return (
    <section className={styles.Browser}>
      <h2 className={styles.title}>Browser</h2>
      <ul>
        <li className={styles.Item}>
          <Link href="/"> {">"} Home</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/"> {">"} Service</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/"> {">"} Who We Are ?</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/">{">"} Our Works</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/">{">"} Blogs</Link>
        </li>
      </ul>{" "}
    </section>
  );
}

export default Browser;
