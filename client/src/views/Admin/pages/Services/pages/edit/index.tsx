import React from "react";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";
import { getService, updateService } from "@/utils/actions/Services";
import DetailsInput from "../shared/DetailsInput";

type Props = {
  serviceId: string;
};

const Index = async ({ serviceId }: Props) => {
  const updateWithServiceId = updateService.bind(null, serviceId);
  const service = await getService(serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Header
        title="Edit Team Service"
        paragraph="Update the service's details below and review the information before saving the changes."
      />
      <form action={updateWithServiceId} className="bg-white">
        <Section title={"Service Info"}>
          <Input
            type="text"
            name="title"
            label="Title"
            length={25}
            required={true}
            initialValue={service.title}
          />
          <TextArea
            name="description"
            label="Description"
            length={500}
            required={true}
            initialValue={service.description}
          />

          <FileInput
            name="image"
            label="Image"
            accept="jpg,png,jpeg"
            initialValue={service.image}
          />
          <Input
            type="text"
            name="link"
            label="Link"
            length={255}
            required={true}
            initialValue={service.link}
          />
        </Section>

        <Section title={"Service Details"}>
          <DetailsInput
            name="details"
            label="Details"
            min={3}
            max={5}
            initialValue={service.details}
          />
        </Section>

        <Buttons title="Save Changes" />
      </form>
    </div>
  );
};

export default Index;
