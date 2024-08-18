import React from "react";
import { getProject, updateProject } from "@/utils/actions/Projects";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import SelectInput from "../shared/SelectInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";
import IncDecInput from "../shared/IncDecInput";
import SearchInput from "../shared/SearchInput";
import { getServices } from "@/utils/actions/Services";
import { IProjectData } from "@/Types";

const Index = async ({ projectId }: { projectId: string }) => {
  const services = await getServices();
  const updateProjectWithId = updateProject.bind(null, projectId);
  const project: IProjectData = await getProject(projectId);

  return (
    <div>
      <Header
        title="Edit The Project"
        paragraph="Please enter the project's details below and validate the information
          before submitting."
      ></Header>

      <form action={updateProjectWithId} className="bg-white">
        <Section title={"Project Customer"}>
          <SearchInput
            name="customerId"
            label="Customer"
            length={25}
            initialValue={project.customer._id}
          />
        </Section>
        <Section title={"Project Info"}>
          <Input
            type="text"
            name="title"
            label="Title"
            length={25}
            required={true}
            initialValue={project.title}
          />
          <TextArea
            name="description"
            label="Description"
            length={500}
            required={true}
            initialValue={project.description}
          />
          <FileInput
            name="previewImage"
            label="Preview Image"
            accept="jpg,png,jpeg"
            initialValue={project.previewImage}
          />
          <Input
            type="text"
            name="link"
            label="Link"
            length={255}
            initialValue={project?.link}
          />
        </Section>

        <Section title="Project Services">
          <SelectInput
            id="services"
            type="checkbox"
            name="services"
            label="Serices"
            data={services}
            initialValue={project.services}
          />
        </Section>

        <Section title={"Project Details"}>
          <IncDecInput initialValue={project.details} />
        </Section>

        <Buttons title="Save Changes"/>
      </form>
    </div>
  );
};

export default Index;
