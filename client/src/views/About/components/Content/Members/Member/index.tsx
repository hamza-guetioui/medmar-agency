import React from "react";
import styles from "./Styles.module.css";
import { IMember } from "@/Types";
import Image from "next/image";

const Member = ({ profile, fullName, position }: IMember) => {
  return (
    <div className={styles.Member}>
      <div className="w-full h-52 rounded-lg overflow-hidden">
        <Image
          src={`/uploads/${profile}`}
          width={100}
          height={100}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold mx-1 text-lg">{fullName}</h3>
      <h3 className="font-bold mx-1 text-lg">{position}</h3>
    </div>
  );
};

export default Member;
