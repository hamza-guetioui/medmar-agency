import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";

function VisiteLink() {
  return (
    <Link
      href="/works"
      className="block  rotate-45 text-3xl"
    >
       <FontAwesomeIcon icon={faArrowUpLong}  />
    </Link>
  )
}

export default VisiteLink;
