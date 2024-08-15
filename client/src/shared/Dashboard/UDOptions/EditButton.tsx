"use client";
import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  id: string | number;
};

function UpdateButton({ id }: Props) {
  const  pathname  = usePathname();
  return (
    <Link href={`${pathname}/edit/${id}`}>
      <button className={styles.UDButton}>
        Edit
        <FontAwesomeIcon
          icon={faPen}
          className="text-yellow-500/80 group-hover:text-yellow-500"
        />
      </button>
    </Link>
  );
}

export default UpdateButton;
