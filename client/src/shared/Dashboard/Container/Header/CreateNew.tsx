"use client";
import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CreateNewButton = () => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/create`}>
      <button className={styles.CreateNewButton}>
        Create New
        <FontAwesomeIcon icon={faPlus} className="font-extrabold" />
      </button>
    </Link>
  );
};

export default CreateNewButton;
