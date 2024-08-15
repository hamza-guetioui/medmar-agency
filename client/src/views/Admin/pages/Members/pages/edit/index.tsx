import React from "react";
import { updateMember, getMember } from "@/utils/actions/Members";
import { IMember } from "@/Types";

import Header from "@/shared/Dashboard/Form/Header";
import Section from "@/shared/Dashboard/Form/Section";
import Input from "@/shared/Dashboard/inputs/Input";
import FileInput from "@/shared/Dashboard/inputs/FileInput";
import TextArea from "@/shared/Dashboard/inputs/TextArea";
import Buttons from "@/shared/Dashboard/Form/Buttons";

type Props = {
  memberId: string;
};

const Index = async ({ memberId }: Props) => {
  const updateWithMemberId = updateMember.bind(null, memberId);
  const member: IMember = await getMember(memberId);

  return (
    <div>
      <Header
        title="Update Member"
        paragraph="Please enter the member's details below and validate the information
          before submitting."
      ></Header>
      <form action={updateWithMemberId} className="bg-white">
        <Section title={"Member Info"}>
          <Input
            type="text"
            name="fullName"
            label="Full Name"
            length={25}
            initialValue={member.fullName}
          />
          <Input
            type="text"
            name="position"
            label="Position"
            length={25}
            initialValue={member.position}
          />
          <FileInput
            name="profileImage"
            label="Profile Image"
            accept="jpg,png,jpeg"
            initialValue={member.profile}
          />
        </Section>
        <Section title={"Member biography"}>
          <TextArea
            name="bio"
            label="About Memeber"
            length={255}
            initialValue={member.bio}
          />
        </Section>
        <Section title={"Sociel Media"}>
          <Input
            type="text"
            name="facebook"
            label="FaceBook"
            length={255}
            initialValue={member.facebook}
          />

          <Input
            type="text"
            name="instagram"
            label="Instagram"
            length={255}
            initialValue={member.instagram}
          />

          <Input
            type="text"
            name="linkedin"
            label="LinkedIn"
            length={255}
            initialValue={member.linkedin}
          />
        </Section>

        <Buttons />
      </form>
    </div>
  );
};

export default Index;
