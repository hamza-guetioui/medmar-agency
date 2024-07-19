import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Styles.module.css"; // Import your SCSS module

function Info() {
  return (
    <section className={styles.Info}>
      <div className={styles.Logo}>
        <Link href="/">
          <Image
            src="/assets/medmar.png"
            width={150}
            height={41}
            alt="medmarLogo"
          />
        </Link>
      </div>
      <div className={styles.Text}>
        Lorem ipsum dolor sit amet consectetur molestiae mollitia officia quis
        porro repellat, sint illum esse, nihil accusantium
      </div>
    </section>
  );
}

export default Info;
