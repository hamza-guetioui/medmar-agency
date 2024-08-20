import React from "react";
import { createProject } from "@/utils/actions/Projects";

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
import { IService } from "@/Types";

const Index = async () => {
  const services : IService[] = await getServices() || [];


  return (
    <div>
      <Header
        title="Create New Project"
        paragraph="Please enter the project's details below and validate the information
          before submitting."
      ></Header>

      <form action={createProject} className="bg-white">
        <Section title={"Project Customer"}>
          <SearchInput name="customerId" label="Customer" length={25} />
        </Section>
        <Section title={"Project Info"}>
          <Input
            type="text"
            name="title"
            label="Title"
            length={25}
            required={true}
          />
          <TextArea
            name="description"
            label="Description"
            length={500}
            required={true}
          />
          <FileInput
            name="previewImage"
            label="Preview Image"
            accept="jpg,png,jpeg"
            required={true}
          />
          <Input type="text" name="link" label="Link" length={255} />
        </Section>


        <Section title="Project Services">
          <SelectInput
            id="services"
            type="checkbox"
            name="services"
            label="Serices"
            data={services}
          />
        </Section>

        <Section title={"Project Details"}>
          <IncDecInput />
        </Section>

        <Buttons title="Create Project"  />
      </form>
    </div>
  );
};

export default Index;
