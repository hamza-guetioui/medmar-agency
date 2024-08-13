import React from "react";
import styles from "./Styles.module.css";
import CreateNewButton from "./CreateNewButton";
import Title from "./Title";

type Props = {
  btnLink: string;
  title: string;
};

const Header = ({ title, btnLink }: Props) => {
  return (
    <section className={styles.table__header}>
      <Title>{title}</Title>
      <CreateNewButton btnLink={btnLink} />
    </section>
  );
};

export default Header;
