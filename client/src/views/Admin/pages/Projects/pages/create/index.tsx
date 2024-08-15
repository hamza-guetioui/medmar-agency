import React from "react";
import { createProject } from "@/utils/actions/Projects";

export const services = [
  { id: "1", title: "Graphic Design" },
  { id: "2", title: "Digital Marketing" },
  { id: "3", title: "Video Editing" },
  { id: "4", title: "Photography" },
  { id: "5", title: "Web Development" },
];

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import SelectInput from "../shared/SelectInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";
import Details from "../shared/Details";

const Index = () => {
  return (
    <div>
      <Header
        title="Create New Project"
        paragraph="Please enter the project's details below and validate the information
          before submitting."
      ></Header>
      <form action={createProject} className="bg-white">
        <Section title={"Project Customer"}>
          <Input
            type="text"
            name="customerId"
            label="Customer Id"
            length={25}
          />
        </Section>
        <Section title={"Project Info"}>
          <Input type="text" name="title" label="Title" length={25} />
          <Input
            type="text"
            name="description"
            label="Description"
            length={25}
          />
          <FileInput
            name="coverImageUrl"
            label="Cover Image"
            accept="jpg,png,jpeg"
          />
          <Input type="text" name="link" label="Link" length={255} />
        </Section>
        <Section title="Project Serices">
          <SelectInput
            id="services"
            type="checkbox"
            name="services"
            label="Serices"
            data={services}
          />
        </Section>

        <Section title={"Project Details"}>
          <Details />
        </Section>

        <Buttons />
      </form>
    </div>
  );
};

export default Index;
