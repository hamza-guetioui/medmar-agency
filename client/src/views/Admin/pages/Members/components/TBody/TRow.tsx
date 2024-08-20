import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import TD from "./TD";

import UDOptions from "@/shared/Dashboard/UDOptions";

import { IMember } from "@/Types";
import Link from "next/link";
import { deleteMember } from "@/utils/actions/Members";

export interface Props extends IMember {
  index: number;
}

const TRow = ({
  index,
  _id,
  fullName,
  position,
  profile,
  bio,
  facebook,
  instagram,
  linkedin,
}: Props) => {
  return (
    <tr className={styles.TRow}>
      <TD>
        <div className="rounded-full w-12 h-12 overflow-hidden">
          <Image
            src={`/uploads/${profile}`}
            width={50}
            height={50}
            alt=""
            className={"w-full h-full object-cover"}
          />
        </div>
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
        <UDOptions id={_id.toString()}>
          <form action={deleteMember} method="post">
            <input type="hidden" value={_id.toString()} name="id" />
            <button className="rounded-md px-4 py-1 bg-red-400">Delete</button>
          </form>
        </UDOptions>
      </TD>
    </tr>
  );
};

export default TRow;
