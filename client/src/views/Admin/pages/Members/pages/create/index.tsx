import React from "react";
import { createMember } from "@/utils/actions/Members";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import Buttons from "@/shared/Dashboard/Form/Buttons";

const Index = () => {
  return (
    <div>
      <Header
        title="Add New Team Member"
        paragraph="Fill in the member's details below and ensure the information is accurate before submitting."
      ></Header>

      <form action={createMember} className="bg-white">
        <Section title={"Member Info"}>
          <Input type="text" name="fullName" label="Full Name" length={25} required={true}/>
          <Input type="text" name="position" label="Position" length={25} required={true}/>
          <FileInput
            name="profile"
            label="Profile Image"
            accept="jpg,png,jpeg"
            required={true}
          />
        </Section>
        <Section title={"Member biography"}>
          <TextArea name="bio" label="About The Memeber" length={255} />
        </Section>
        <Section title={"Sociel Media"}>
          <Input type="text" name="facebook" label="FaceBook" length={255} />

          <Input type="text" name="instagram" label="Instagram" length={255} />

          <Input type="text" name="linkedin" label="LinkedIn" length={255} />
        </Section>

        <Buttons />
      </form>
    </div>
  );
};

export default Index;
