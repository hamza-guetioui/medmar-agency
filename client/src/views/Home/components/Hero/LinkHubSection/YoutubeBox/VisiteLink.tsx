import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function VisiteLink() {
  return (
    <Link
      href="#"
      className="underline hover:text-primary-color hover:opacity-80  font-extrabold"
    >
      {"Our Channel "} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </Link>
  );
}

export default VisiteLink;
