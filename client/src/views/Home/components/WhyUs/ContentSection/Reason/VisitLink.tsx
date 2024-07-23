import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface VisiteLinkProps {
  text: string;
  href: string;
}
const VisiteLink: React.FC<VisiteLinkProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="underline hover:text-primary-color hover:opacity-80  font-extrabold"
    >
      {text} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </Link>
  );
};

export default VisiteLink;
