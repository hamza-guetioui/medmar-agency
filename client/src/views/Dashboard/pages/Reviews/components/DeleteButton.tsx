import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import AcceptDelete from "./AcceptDelete";

type Props = {
  id: string | number;
};

function DeleteButton({id}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <button className={styles.UDButton} onClick={handleToggle}>
        Delete
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500/80 group-hover:text-red-500"
        />
      </button>

      {isOpen && <AcceptDelete handleToggle={handleToggle} id={id} />}
    </>
  );
}

export default DeleteButton;
