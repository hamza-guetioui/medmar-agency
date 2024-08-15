import React from "react";
import { getCustomer, updateCustomer } from "@/utils/actions/Customers";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import NumberInput from "@/shared/Dashboard/inputs/NumberInput";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import CheckBoxInput from "@/shared/Dashboard/inputs/CheckBoxInput";
import Buttons from "@/shared/Dashboard/Form/Buttons";
import { ICustomer } from "@/Types";

type Props = {
  customerId: string;
};

const Index = async ({ customerId }: Props) => {
  const updateWithCustomerId = updateCustomer.bind(null, customerId);
  const customer: ICustomer = await getCustomer(customerId);

  return (
    <div>
      <Header
        title="Update Customer Information"
        paragraph="Review and update the customer's details below. 
        Please ensure that all changes are accurate before submitting the form."
      ></Header>

      <form action={updateWithCustomerId} className="bg-white">
        <Section title={"Customer Info"}>
          <Input
            type="text"
            name="fullName"
            label="Full Name"
            length={25}
            initialValue={customer.fullName}
            required={true}
          />
          <Input
            type="text"
            name="jobTitle"
            label="Job Title"
            length={25}
            initialValue={customer.jobTitle}
            required={true}
          />
          <Input
            type="email"
            name="email"
            label="Email Address"
            length={255}
            initialValue={customer.email}
            required={true}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone Number"
            length={255}
        
            initialValue={customer.phone}
            required={true}
          />
          <FileInput
            name="avatar"
            label="Avatar"
            accept="jpg,png,jpeg"
            initialValue={customer.avatar}
          />
        </Section>
        <Section title={"Review Details"}>
          <TextArea
            name="testimonial"
            label="Customer Testimonial"
            length={255}
            initialValue={customer.testimonial}
          />
          <NumberInput
            name="rating"
            label="Rating"
            min={0}
            max={5}
            initialValue={customer.rating}
          />
          <CheckBoxInput
            name="published"
            label="Mark Review as Published"
            initialValue={customer.published}
          />
        </Section>
        <Section title={"Bussiness Logo"}>
          <FileInput
            name="businessLogo"
            label="Bussiness Logo"
            accept="jpg,png,jpeg"
            initialValue={customer.businessLogo}
          />
        </Section>
        <Buttons />
      </form>
    </div>
  );
};

export default Index;
