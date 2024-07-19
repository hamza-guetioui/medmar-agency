import React from "react";


import styles from "./Styles.module.css"


function Contact() {
  return (
    <section className={styles.Contact}>
      <h2 className={styles.title}>Contact</h2>
      <ul>
        <li className={styles.Item}>Address: 123 Main St, Anytown</li>
        <li className={styles.Item}>Phone: 123-456-7890</li>
        <li className={styles.Item}>Email: mailto:email@email.com</li>
      </ul>
    </section>
  );
}

export default Contact;
