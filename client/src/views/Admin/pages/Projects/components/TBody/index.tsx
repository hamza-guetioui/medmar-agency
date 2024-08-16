import React from "react";
import TRow from "./TRow";

// Fetch Projects
import { getProjects } from "@/utils/actions/Projects";
import { IProjectData } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const projects: IProjectData[] = await getProjects();

  if (!projects || projects.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {projects.map((project) => {
        return <TRow key={project._id} {...project} />;
      })}
    </tbody>
  );
};

export default Index;
