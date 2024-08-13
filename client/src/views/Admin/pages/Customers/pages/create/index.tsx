import React from "react";
import { createCustomer } from "@/utils/actions/Customers";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import NumberInput from "@/shared/Dashboard/inputs/NumberInput";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import CheckBoxInput from "@/shared/Dashboard/inputs/CheckBoxInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";

const Index = () => {
  return (
    <div>
      <Header
        title="Create New Customer"
        paragraph="Please enter the customer's details below and validate the information
          before submitting."
      ></Header>
      <form action={createCustomer} className="bg-white">
        <Section title={"Customer Info"}>
          <Input type="text" name="fullName" label="Full Name" length={25} />
          <Input type="text" name="jobTitle" label="Job Title" length={25} />
          <FileInput name="avatarUrl" label="Avatar" accept="jpg,png,jpeg" />
        </Section>
        <Section title={"Review"}>
          <TextArea
            name="testimonial"
            label="Customer testimonial"
            length={255}
          />
          <NumberInput name="rating" label="Rating" min={0} max={5} />
          <CheckBoxInput
            name="published"
            label="Check if the Review will be published"
          />
        </Section>
        <Section title={"Bussiness Logo"}>
          <FileInput
            name="businessLogo"
            label="Bussiness Logo"
            accept="jpg,png,jpeg"
          />
        </Section>
        <Buttons />
      </form>
    </div>
  );
};

export default Index;
