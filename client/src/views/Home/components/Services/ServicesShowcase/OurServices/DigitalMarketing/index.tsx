import React from "react";
import generaleStyles from "../Styles.module.css";
import Title from "./Title";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Media from "./Media";

function Index() {
  return (
    <>
      <div className={generaleStyles.Info}>
        <Title />
        <Paragraph />
        <Button />
      </div>
      <div className={generaleStyles.Media}>
        <Media />
      </div>
    </>
  );
}

export default Index;
