import React from "react";
import styles from "./Styles.module.css";
import TD from "./TD";

import { deleteProject } from "@/utils/actions/Projects";
import UDOptions from "@/shared/Dashboard/UDOptions";
import { IProjectData } from "@/Types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";


const TRow = ({
  _id,
  title,
  description,
  previewImage,
  services,
  customer,
  link,
  details,
}: IProjectData) => {
  return (
    <tr className={styles.TRow}>
      <TD>
        {" "}
        <div className="rounded-lg w-24 h-24 overflow-hidden">
          <Image
            src={`/uploads/${previewImage}`}
            width={50}
            height={50}
            alt=""
            className={"w-full h-full object-cover"}
          />
        </div>
      </TD>
      <TD>{title}</TD>
      <TD>{description}</TD>
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
      <TD>{customer.fullName}</TD>
      <TD>
        <ul className="list-[circle]">
          {services?.map((s) => (
            <li key={s._id}>{s.title}</li>
          ))}
        </ul>
      </TD>
      <TD>
        <ul className="list-[circle]">
          {details?.map((d) => (
            <li key={d._id}>{d.feature}</li>
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
