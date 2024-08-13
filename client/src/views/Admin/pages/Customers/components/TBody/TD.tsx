import React from "react";
import styles from './Styles.module.css'

type Props = {
    children: React.ReactNode
};

function TD({children}: Props) {
  return <td className={styles.TD}>{children}</td>;
}

export default TD;
