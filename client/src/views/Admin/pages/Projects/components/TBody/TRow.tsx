import React from "react";
import styles from "./Styles.module.css";
import TD from "./TD";

import { deleteProject } from "@/utils/actions/Projects";
import UDOptions from "@/shared/Dashboard/UDOptions";
import { IProject } from "@/Types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  index: number;
  project: IProject;
};

const TRow = ({ index, project }: Props) => {
  const { _id, title, description, coverImageUrl, type, link, details } =
    project;

  return (
    <tr className={styles.TRow}>
      <TD>{index + 1}</TD>
      <TD>{title}</TD>
      <TD>{description}</TD>
      <TD>{type}</TD>
      <TD>
        {link ? (
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLink} />
            <Link href={link} className="hover:text-secondary-color">
              {link}
            </Link>
          </div>
        ) : (
          ""
        )}
      </TD>
      <TD>
        <ul className="list-[circle]">
          {details?.map((detail) => (
            <li key={detail.feature}>{detail.feature}</li>
          ))}
        </ul>
      </TD>
      <TD>
        <UDOptions id={_id} deleteAction={deleteProject} />
      </TD>
    </tr>
  );
};

export default TRow;
