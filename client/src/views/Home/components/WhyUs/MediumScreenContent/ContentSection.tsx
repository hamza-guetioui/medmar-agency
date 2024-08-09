import React from "react";
import styles from "./Styles.module.css";
import Reason from "../Reason";

import { reasons } from "../data";

function ContentSection() {
  return (
    <div className={styles.Content}>
      {reasons.map((reason) => {
        return (
          <Reason
            key={reason.id}
            title={reason.title}
            description={reason.description}
            image={reason.imageSrc}
          />
        );
      })}
    </div>
  );
}

export default ContentSection;
