import React from "react";
import styles from "./Styles.module.css";
import { getProjects } from "@/utils/actions/Projects";
import Project from "./Project";
import { IProject, IProjectData } from "@/Types";

async function Index() {
  const projects: IProjectData[] = await getProjects() || [];

  return (
    <main className={styles.Container}>
      {projects.map((project) => (
        <Project key={project._id.toString()} {...project} />
      ))}
    </main>
  );
}

export default Index;
