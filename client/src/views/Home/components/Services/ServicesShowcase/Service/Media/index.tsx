import React from "react";
import styles from "./Styles.module.css";
import CoverImage from "./MainImage";
import SideImage from "./SideImage";
import Video from "./Video";

function Index() {
  return (
    <div className={styles.MediaContainer}>
      <CoverImage />
      <SideImage />
      <Video />
    </div>
  );
}

export default Index;
