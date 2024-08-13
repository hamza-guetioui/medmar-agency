import React from "react";
import styles from "./Styles.module.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Props = {
  id: number;
  index: number;
  title: string;
  description: string;
  imageSrc: string;
  videoSrc: string;
  videoDescription: string;
  additionalInfo: string[];
};

const TRow = ({
  id,
  index,
  title,
  description,
  imageSrc,
  videoSrc,
  videoDescription,
  additionalInfo,
}: Props) => {
  return (
    <tr className={styles.TRow}>
      <td className={styles.td}>{index}</td>
      <td className={styles.td}>{title}</td>
      <td className={styles.td}>{description}</td>
      <td className={styles.td}>
        <div className="w-9 h-9 rounded-full bg-slate-300"></div>
      </td>
      <td className={styles.td}>
        <div className="w-16 h-12 rounded-xl bg-slate-300"></div>
      </td>
      <td className={styles.td}>{videoDescription}</td>
      <td className={styles.td}>
        {additionalInfo.map((e, index) => {
          return <span key={index} >{e}</span>;
        })}
      </td>
      <td className={styles.icon}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </td>
    </tr>
  );
};

export default TRow;
