import React from "react";
import Paragraph from "./Paragraph";
import BaseParagraph from "./BaseParagraph";
import styles from "./Styles.module.css";
import WatchButton from "./WatchButton";
import Video from "./Video";

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
          <Video />
          <BaseParagraph />
        </div>
      </div>
    </HandleClickProvider>
  );
}

export default YoutubeBox;
