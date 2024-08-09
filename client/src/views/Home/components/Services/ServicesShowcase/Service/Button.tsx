import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";

interface ButtonProps {
  path: string;
}

const Button: React.FC<ButtonProps> = ({ path }) => {
  return (
    <button className={styles.Button}>
      <Link href={path}>See Details</Link>
    </button>
  );
};

export default Button;
