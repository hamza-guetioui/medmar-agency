import Link from "next/link";
import React from "react";

import styles from "./Styles.module.css"

function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Link href="/" className={styles.Link}>Home</Link>

      <Link href="/services" className={styles.Link}>Services</Link>

      <Link href="/about" className={styles.Link}>Who We Are ?</Link>

      <Link href="/works" className={styles.Link}>Works</Link>

      <Link href="/blogs" className={styles.Link}>Blogs</Link>
    </nav>
  );
}

export default Navigation;
