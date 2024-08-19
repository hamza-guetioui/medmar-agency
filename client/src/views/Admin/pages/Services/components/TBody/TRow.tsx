import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import TD from "./TD";
import UDOptions from "@/shared/Dashboard/UDOptions";
import { IService } from "@/Types";
import { deleteService } from "@/utils/actions/Services";

export interface Props extends IService {
  index: number;
}

const TRow = ({
  index,
  _id,
  title,
  description,
  image,
  details,
  link,
}: Props) => {
  return (
    <tr className={styles.TRow}>
      <TD>
        <div className="rounded-lg w-24 h-24 overflow-hidden">
          <Image
            src={`/uploads/${image}`}
            width={50}
            height={50}
            alt=""
            className={"w-full h-full object-cover"}
          />
        </div>
      </TD>
      <TD>{title}</TD>
      <TD>{description}</TD>
      <TD>{link}</TD>
      <TD>
        {
          <ul className="flex flex-col gap-2 text-sm">
            {details.map((item) => (
              <li key={item._id.toString()}>
                {" "}
                {"-"} {item.detail}
              </li>
            ))}
          </ul>
        }
      </TD>
      <TD>
        {" "}
        <UDOptions id={_id.toString()} deleteAction={deleteService} />
      </TD>
    </tr>
  );
};

export default TRow;
