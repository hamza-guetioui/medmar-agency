"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import { usePathname } from "next/navigation";

const Services = [
  { id: 1, title: "Graphic Design", link: "/services/graphic-design" },
  { id: 2, title: "Digital Marketing", link: "/services/digital-marketing" },
  { id: 3, title: "Video Editing", link: "/services/video-editing" },
  { id: 4, title: "Photography", link: "/services/photography" },
  { id: 5, title: "Web Development", link: "/services/web-development" },
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
      ? Services.find((e) => e.link === pathname)?.title
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
