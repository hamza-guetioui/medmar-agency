import React from "react";
import Header from "./Header";
import styles from "./Styles.module.css";
import { getProjects } from "@/utils/actions/Projects";
import Container from "./Container";

async function Index() {
  const projects = await getProjects() || [];
  return (
    <div className={styles.Container}>
      <Header />
      <Container projects={projects} />
    </div>
  );
}

export default Index;
