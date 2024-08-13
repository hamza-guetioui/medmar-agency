import React from "react";
import styles from './Styles.module.css'

import Form from "../../../shared/Form";
import Input from "../../../shared/inputs/Input";
import NumberInput from "../../../shared/inputs/NumberInput";
import FileInput from "../../../shared/inputs/FileInput";
import TextArea from "../../../shared/inputs/TextArea";

import { createReview } from "@/utils/action";
import InputsWrapper from "../../../shared/Form/InputsWrapper";
import MediaWrapper from "../../../shared/Form/MediaWrapper";

function Index() {
  return (
    <form className={styles.Form}  action={createReview}>
      <Form title={`Create New Review`}>
       <InputsWrapper>
        <Input type="text" label="Name" name="name" length={20} />
        <Input type="text" label="Job" name="job" length={20} />
        <TextArea name="comment" label="Comment" length={50} />
        <NumberInput label="Rate" name="rate" min={0} max={5} />
      </InputsWrapper>
      {/* <MediaWrapper>
        <FileInput name="image" label="Image" accept="jpg,jpeg,png" />
      </MediaWrapper>   */}
      </Form>
     
    </form>
  );
}

export default Index;
