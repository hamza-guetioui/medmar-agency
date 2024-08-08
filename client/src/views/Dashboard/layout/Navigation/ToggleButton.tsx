"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import { usePathname } from "next/navigation";

const Pages = [
  { id: 1, title: "works", link: "/admin/dashboard/works" },
  { id: 2, title: "reviews", link: "/admin/dashboard/reviews" },
  { id: 3, title: "teams", link: "/admin/dashboard/teams" },
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
      <span>{selected}</span>
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`${isOpen ? "rotate-90" : ""}`}
      />
    </button>
  );
}

export default Button;
