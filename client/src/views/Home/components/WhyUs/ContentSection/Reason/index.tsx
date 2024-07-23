import React from "react";
import Image from "next/image";
import styles from "./Styles.module.css";
import Icon from "./Icon";
import Title from "./Title";
import Paragraph from "./Paragraph";

interface ReasonProps {
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ title, description }) => {
  return (
    <div className={styles.Content}>
      <Icon title={title} />
      <Title>{title}</Title>
      <Paragraph text={description}></Paragraph>
      {/* <div className={styles.VideoWrapper}>
        <video
          className={styles.Video}
          src="../../Downloads/animated_medium20220928-8228-qn9a8c.mp4"
          controls
          autoPlay
          muted
        ></video>
      </div> */}

    </div>
  );
};

export default Reason;
