import React from "react";

import styles from "./Styles.module.css";
import Clients from "./Clients";
import LinkButton from "./LinkButton";
function ReviwesBox() {
  return (
    <div className={styles.ReviewsBox}>
      <div className={styles.Head}>
        <Clients />
        <LinkButton />
        
      </div>
      <div className={styles.Base}>
        <div className={styles.BaseNumber}> {"+31"} </div>
        <p className={styles.BaseText}>
          <span>see what people</span>
          <span>says about Us ?</span>
        </p>
      </div>
    </div>
  );
}

export default ReviwesBox;
