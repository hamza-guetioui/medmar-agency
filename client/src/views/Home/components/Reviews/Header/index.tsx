import React from "react";
import styles from './Styles.module.css'
import SubTitle from "./SubTitle";
import ScrollButtons from "./ScrollButtons";
import Title from "./Title";

function Index() {
  return (
    <div >
        {/* <Title/> */}
      <div className="flex justify-between items-start my-10 px-6">
        <SubTitle />
        <ScrollButtons />
      </div>
    </div>
  );
}

export default Index;
