import React from "react";
import styles from "./Styles.module.css";
import TD from "./TD";
import UDOptions from "@/shared/Dashboard/UDOptions";
import { deleteCustomer } from "@/utils/actions/Customers";
import { ICustomer } from "@/Types";
import Image from "next/image";

export interface Props extends ICustomer {
  index: number;
}

const TRow = ({
  index,
  _id,
  fullName,
  jobTitle,
  avatar,
  testimonial,
  rating,
  published,
}: Props) => {
  return (
    <tr className={styles.TRow}>
      <TD>
        {avatar ? (
          <div className="rounded-full w-12 h-12 overflow-hidden">
            <Image
              src={`/uploads/${avatar}`}
              width={50}
              height={50}
              alt=""
              className={"w-full h-full object-cover"}
            />
          </div>
        ) : (
          <div
            className="w-12 h-12 rounded-full"
            // className={styles.AvatarPlaceholder}
          />
        )}
      </TD>
      <TD>{fullName}</TD>
      <TD>{jobTitle}</TD>
      <TD>{testimonial}</TD>
      <TD>{rating}</TD>
      <TD>{published ? "Yes" : "No"}</TD>
      <TD>
        <UDOptions id={_id.toString()} deleteAction={deleteCustomer} />
      </TD>
    </tr>
  );
};

export default TRow;
