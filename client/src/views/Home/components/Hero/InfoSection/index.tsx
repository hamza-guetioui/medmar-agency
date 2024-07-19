import React from "react";
import Title from "./Title"
import Paragraph from "./Paragraph"

import styles from "./Styles.module.css"
import Button from "./Button";
import StatesBox from "./StatesBox";

function Index() {
  return (
    <section className={styles.InfoSection} >
      <Title/>
      <Paragraph/>
      <Button/>
      <StatesBox/>
    </section>
  );
}

export default Index;
