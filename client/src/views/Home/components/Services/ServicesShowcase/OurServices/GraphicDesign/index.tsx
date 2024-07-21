import React from "react";
import generaleStyle from "../Styles.module.css";
import Title from "./Title";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Media from "./Media";

function Index() {
  return (
    <>
      <div className={generaleStyle.Info}>
        <Title />
        <Paragraph />
        <Button />
      </div>
      <div className={generaleStyle.Media}>
        <Media />
      </div>
    </>
  );
}

export default Index;
