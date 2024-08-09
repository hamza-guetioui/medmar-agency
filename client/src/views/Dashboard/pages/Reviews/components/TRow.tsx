import React from "react";
import styles from "./Styles.module.css";
import OptionsBtn from "./OptionsBtn";

type Props = {
  id: number | string;
  index: number;
  name: string;
  job: string;
  rate: number;
  comment: string;
};

const TRow = ({ id, index, name, job, rate, comment }: Props) => {

  return (
    <tr className={styles.TRow}>
      <td className={styles.td}>{index}</td>
      <td className={styles.td}>{name}</td>
      <td className={styles.td}>{job}</td>
      <td className={styles.td}>{rate}</td>
      <td className={styles.td}>{comment}</td>
      <td className={styles.Icon}>
        {" "}
        <OptionsBtn id={id} /> 
      </td>
    </tr>
  );
};

export default TRow;
