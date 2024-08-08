import React from "react";
import styles from "./Styles.module.css";

type Props = {
  children: React.ReactNode;
};

function Header({ children }: Props) {
  return <h1 className={styles.Title}>{children}</h1>;
}

export default Header;
