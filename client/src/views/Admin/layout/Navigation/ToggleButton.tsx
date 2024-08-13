"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import { usePathname } from "next/navigation";

const Pages = [
  { id: 1, title: "customers", link: "/admin/dashboard/customers" },
  { id: 2, title: "projects", link: "/admin/dashboard/projects" },
  { id: 3, title: "members", link: "/admin/dashboard/members" },
];

type Props = {
  isOpen: boolean;
  handleClick: (value?: boolean) => void;
};

function Button({ isOpen, handleClick }: Props) {
  const pathname = usePathname();

  // Split the pathname into parts
  const pathParts = pathname.split("/").filter((part) => part);
  const selected =
    pathParts.length >= 2
      ? Pages.find((e) => e.link === pathname)?.title
      : pathParts[0];



  return (
    <button className={styles.ToggleButton} onClick={() => handleClick()}>
      <span className="mr-2">{selected}</span>
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`${isOpen ? "rotate-90" : ""}`}
      />
    </button>
  );
}

export default Button;
