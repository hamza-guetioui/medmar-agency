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
        title="Add a New Customer"
        paragraph="Please fill out the customer's details below,
         ensuring all information is accurate before submission."
      ></Header>
      <form action={createCustomer} className="bg-white">
        <Section title={"Customer Info"}>
          <Input
            type="text"
            name="fullName"
            label="Full Name"
            length={25}
            required={true}
          />
          <Input
            type="text"
            name="jobTitle"
            label="Job Title"
            length={25}
            required={true}
          />
          <Input
            type="email"
            name="email"
            label="Email Address"
            length={255}
            required={true}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone Number"
            length={255}
            required={true}
          />
          <FileInput
            name="avatar"
            label="Avatar"
            accept="jpg,png,jpeg"
            required={true}
          />
        </Section>
        <Section title={"Review Details"}>
          <TextArea
            name="testimonial"
            label="Customer Testimonial"
            length={255}
          />
          <NumberInput name="rating" label="Rating" min={0} max={5} />
          <CheckBoxInput name="published" label="Mark Review as Published" />
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
