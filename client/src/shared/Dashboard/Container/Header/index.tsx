import React from "react";
import styles from "./Styles.module.css";
import CreateNew from "./CreateNew";
import Title from "./Title";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <section className={styles.Header}>
      <Title>{title}</Title>
      <CreateNew />
    </section>
  );
};

export default Header;
