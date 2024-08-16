import React from "react";
import TRow from "./TRow";

// fetch Reviews
import { getMembers } from "@/utils/actions/Members";
import { IMember } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const members: IMember[] = await getMembers();

  if (members.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {members.map((member, index) => {
        return <TRow key={member._id} index={index} {...member}></TRow>;
      })}
    </tbody>
  );
};

export default Index;
