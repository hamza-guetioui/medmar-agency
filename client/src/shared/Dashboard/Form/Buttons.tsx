import React from "react";

import styles from './Styles.module.css'

function Buttons() {
  return (
    <div className={styles.buttonsWrapper}>
      <button type="submit" className={`${styles.Button} ${styles.Submit}`}>save</button>
      <button name="cancel" className={`${styles.Button} ${styles.Cancel}`}>cancel</button>
    </div>
  );
}

export default Buttons;
