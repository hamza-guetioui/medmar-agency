import React from "react";
import { createService } from "@/utils/actions/Services";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";
import DetailsInput from "../shared/DetailsInput";

const Index = () => {
  return (
    <div>
      <Header
        title="Add New Team Service"
        paragraph="Fill in the service's details below and ensure the information is accurate before submitting."
      ></Header>

      <form action={createService} className="bg-white">
        <Section title={"Service Info"}>
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
            name="image"
            label="Image"
            accept="jpg,png,jpeg"
            required={true}
          />
          <Input
            type="text"
            name="link"
            label="Link"
            length={255}
            required={true}
          />
        </Section>

        <Section title={"Service Details"}>
          <DetailsInput name="details" label="Details" min={3} max={5} />
        </Section>

        <Buttons />
      </form>
    </div>
  );
};

export default Index;
