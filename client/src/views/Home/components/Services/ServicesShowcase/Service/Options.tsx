import React from "react";
import styles from "./Styles.module.css";

interface OptionsTypes {
  list: string[];
}
const Options: React.FC<OptionsTypes> = ({ list }) => {
  return (
    <ul className="ml-12  mb-4">
      {list.map((ele, index) => {
        return (
          <li key={index} className={styles.Option}>
            {ele}
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
