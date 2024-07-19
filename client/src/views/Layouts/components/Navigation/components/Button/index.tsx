import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";

function Index() {
  return (
    <button className={styles.Button}>
      <Link href="/contact">Connect with Us</Link>
    </button>
  );
}

export default Index;
