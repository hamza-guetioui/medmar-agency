"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Path() {
  const pathname = usePathname();

  // Split the pathname into parts
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <div className={styles.Path}>
      {pathParts.map((part, index) => {
        const link =
          part === "services" ? `/${part}` : `/${pathParts[0]}/${part}`;
        return (
          <Link key={index} href={link} className={styles.pathLink}>
            <span className="hover:text-secondary-color">{part}</span>
            {index < pathParts.length - 1 && (
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            )}
          </Link>
        );
      })}{" "}
    </div>
  );
}

export default Path;
