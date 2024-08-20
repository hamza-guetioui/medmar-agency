import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import DeleteForm from "./DeleteForm";

type Props = {
  id: string;
  children :React.ReactNode
};

function DeleteButton({ id, children }: Props) {
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

      {isOpen && (
        <DeleteForm handleToggle={handleToggle}  >
          {children}
        </DeleteForm>
      )}
    </>
  );
}

export default DeleteButton;
