import React from "react";
import styles from "./Styles.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept: string | undefined;
  name: string;
};

const UploadButton = ({ accept, name, onUpload }: Props) => {
  return (
    <label htmlFor="file" className={styles.UploadButton}>
      upload file
      <FontAwesomeIcon icon={faUpload} />
      <input
        id="file"
        className={styles.input}
        type="file"
        name={name}
        accept={accept || ""}
        onChange={onUpload}
      />
    </label>
  );
};

export default UploadButton;
