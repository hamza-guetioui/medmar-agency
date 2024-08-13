import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import Link from "next/link";

type Props = {
 btnLink:string;
};

const CreateNewButton = ({btnLink}: Props) => {
  return (
    <button className={styles.CreateNewButton}>
      <Link href={btnLink}>
        Create New
        <FontAwesomeIcon icon={faPlus} className="font-extrabold" />
      </Link>
    </button>
  );
};

export default CreateNewButton;
