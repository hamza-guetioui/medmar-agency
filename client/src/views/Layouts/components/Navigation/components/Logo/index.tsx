import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Styles.module.css'

function Index() {
  return (
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
  );
}

export default Index;
