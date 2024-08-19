"use client";
import React, { useMemo } from "react";
import Showcase from "./Showcase";
import { IProjectData } from "@/Types";

type Props = {
  projects: IProjectData[];
};

function Container({ projects }: Props) {
  const arr1 = useMemo(() => projects.slice(0, 6), [projects]);
  const arr2 = useMemo(() => projects.slice(6, 12), [projects]);
  return (
    <div className=" rotate-3 my-8 ">
      <Showcase projects={arr1}/>
      <Showcase projects={arr2}/>
    </div>
  );
}

export default Container;
