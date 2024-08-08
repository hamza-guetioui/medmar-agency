"use client";
import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import Link from "next/link";

type Props = {
  id: string | number;
};

function UpdateButton({ id }: Props) {
  return (
    <Link href={`http://localhost:3000/admin/dashboard/reviews/edit/${id}`}>
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
