"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Path() {
  const pathname = usePathname();

  // Split the pathname into parts
  const pathParts = pathname.split("/").filter((part) => part);

  // Map each part to a more readable format and create links
  const pathLine = pathParts.map((part, index) => {
    return (
      <span key={index}>
        <Link
          href={`/${part}`}
          className="text-black/70 hover:underline first-letter:uppercase"
        >
          {part}
        </Link>
        {index < pathParts.length - 1 && " > "}
      </span>
    );
  });

  return <div className="mb-6">{pathLine}</div>;
}

export default Path;
