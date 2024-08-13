import React from "react";
import styles from "./Styles.module.css";
import TD from "./TD";
import { ICustomer } from "@/Types";
import Image from "next/image";

export interface ICustomerRowProps extends ICustomer {
  index: number;
}

const TRow = ({
  index,
  fullName,
  jobTitle,
  avatarUrl,
  testimonial,
  rating,
  published,
}: ICustomerRowProps) => {
  return (
    <tr className={styles.TRow}>
      <TD>
        {avatarUrl ? (
          <Image
            src={`/images/${avatarUrl}`}
            width={48}
            height={48}
            alt=""
            className={"rounded-full object-cover"}
          />
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
      <TD>{""}</TD>
    </tr>
  );
};

export default TRow;
