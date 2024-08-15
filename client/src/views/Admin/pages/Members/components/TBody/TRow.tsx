import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import TD from "./TD";

import UDOptions from "@/shared/Dashboard/UDOptions";

import { IMember } from "@/Types";
import Link from "next/link";
import { deleteMember } from "@/utils/actions/Members";

type Props = {
  index: number;
  member: IMember;
};

const TRow = ({ index, member }: Props) => {
  const {
    _id,
    fullName,
    position,
    profileImage,
    bio,
    facebook,
    instagram,
    linkedin,
  } = member;
  return (
    <tr className={styles.TRow}>
      <TD>
        <Image
          src={`/images/${profileImage}`}
          width={48}
          height={48}
          alt=""
          className={"rounded-full object-cover"}
        />
      </TD>
      <TD>{fullName}</TD>
      <TD>{position}</TD>
      <TD>{bio}</TD>
      <TD>
        {
          <ul className="flex flex-col gap-2 text-sm">
            {facebook && (
              <li className="flex gap-2">
                <Image
                  src={"/assets/facebook.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Link href={facebook} className="hover:text-secondary-color">
                  {facebook}
                </Link>
              </li>
            )}
            {instagram && (
              <li className="flex gap-2">
                <Image
                  src={"/assets/instagram.png"}
                  alt=""
                  width={18}
                  height={18}
                />

                <Link href={instagram} className="hover:text-secondary-color">
                  {instagram}
                </Link>
              </li>
            )}
            {linkedin && (
              <li className="flex gap-2 ">
                <Image
                  src={"/assets/linkedin.png"}
                  alt=""
                  width={18}
                  height={18}
                />
                <Link href={linkedin} className="hover:text-secondary-color">
                  {linkedin}
                </Link>
              </li>
            )}
          </ul>
        }
      </TD>
      <TD>
        {" "}
        <UDOptions id={_id} deleteAction={deleteMember} />
      </TD>
    </tr>
  );
};

export default TRow;
