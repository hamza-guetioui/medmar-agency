import { ICustomer } from "@/Types";
import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface CustomerProps extends ICustomer {
  onClick: (_id: string, fullName: string) => void;
}

const Customer = ({
  _id,
  avatar,
  fullName,
  jobTitle,
  onClick,
}: CustomerProps) => {
  return (
    <div  className={styles.Container}>
      <div className={styles.Customer} onClick={() => onClick(_id, fullName)}>
        <div className="rounded-full w-9 h-9 overflow-hidden">
          <Image
            src={`/uploads/${avatar}`}
            width={50}
            height={50}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <span>{fullName}</span>
        <span>{jobTitle}</span>
      </div>{" "}
      <Link
        href={`/admin/dashboard/customers/edit/${_id}`}
        className="hover:text-black text-slate-400 text-xl"
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </Link>
    </div>
  );
};

export default Customer;
