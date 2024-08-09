import React from "react";
import styles from "./Styles.module.css";
import NavigateButton from "./NavigateButton";

import { reasons } from "../../data";

function Index() {
  return (
    <div className={styles.NavigationList}>
      <ul className={styles.List}>
        {reasons.map((reason) => {
          return (
            <NavigateButton
              key={reason.id}
              id={reason.id}
              reason={reason.title}
            />
          );
        })}
      </ul>{" "}
    </div>
  );
}

export default Index;
