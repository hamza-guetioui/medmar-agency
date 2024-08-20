import React from "react";
import styles from "./Styles.module.css";

import { IMember } from "@/Types";
import { getMembers } from "@/utils/actions/Members";
import Member from "./Member";

async function Index() {
  const members: IMember[] = (await getMembers()) || [];
  if (!members) {
    return <div>no members</div>;
  }

  return (
    <div className={styles.Container}>
      {members.map((member) => (
        <Member key={member._id.toString()} {...member} />
      ))}
    </div>
  );
}

export default Index;
