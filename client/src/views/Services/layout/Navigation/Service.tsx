import React from "react";
import Link from "next/link";

import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
  link: string;
};

function Service({ children, link }: Props) {
  return (
    <li className={styles.Service}>
      <Link href={link}> {children}</Link>
    </li>
  );
}

export default Service;
