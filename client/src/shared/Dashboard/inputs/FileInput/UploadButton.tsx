import React from "react";
import styles from "./Styles.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: React.ReactNode;
};

const UploadButton = ({ children }: Props) => {
  return (
    <label htmlFor="file" className={styles.UploadButton}>
      upload file
      <FontAwesomeIcon icon={faUpload} />
      {children}
    </label>
  );
};

export default UploadButton;
