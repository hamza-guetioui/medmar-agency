import React from "react";
import Paragraph from "./Paragraph";
import BaseParagraph from "./BaseParagraph";
import styles from "./Styles.module.css";
import WatchButton from "./WatchButton";


//handle click provider
import HandleClickProvider from "./context";

function YoutubeBox() {
  return (
    <HandleClickProvider>
      <div className={styles.YoutubeBox}>
        <div className={styles.Head}>
          <Paragraph />
        </div>

        <div className={styles.WatchVideo}>
          <WatchButton />
          <BaseParagraph />
        </div>
      </div>
  
    </HandleClickProvider>
  );
}

export default YoutubeBox;
