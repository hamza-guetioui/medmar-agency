import React from "react";
import TRow from "./TRow";

// Fetch Projects
import { getProjects } from "@/utils/actions/Projects";
import { IProject } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const projects: IProject[] = await getProjects();

  if (projects.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {projects.map((project, index) => {
        return <TRow key={project._id} index={index} project={project} />;
      })}
    </tbody>
  );
};

export default Index;
