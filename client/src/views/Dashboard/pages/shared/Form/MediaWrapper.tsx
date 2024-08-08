import React from "react";
import styles from './Styles.module.css'

type Props = {
  children: React.ReactNode;
};

const MediaWrapper = ({ children }: Props) => {
  return <div className={styles.MediaWrapper}>{children}</div>;
};

export default MediaWrapper;
