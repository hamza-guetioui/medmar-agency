import React from "react";
import styles from "./Styles.module.css";

import Form from "../../../shared/Form";
import InputsWrapper from "../../../shared/Form/InputsWrapper";
import MediaWrapper from "../../../shared/Form/MediaWrapper";
import Input from "../../../shared/inputs/Input";
import NumberInput from "../../../shared/inputs/NumberInput";
import FileInput from "../../../shared/inputs/FileInput";
import TextArea from "../../../shared/inputs/TextArea";

interface ReviewTypes {
  _id: string;
  name: string;
  job: string;
  rate: number;
  comment: string;
}

import { updateReview, getReview } from "@/utils/action";

async function UpdateForm({ id }: { id: string | number }) {
  const review: ReviewTypes = await getReview(id);

  return (
    <form className={styles.Form} action={updateReview}>
      <Form title={`Update Your Review`}>
        <InputsWrapper>
          {review._id && (
            <input type="hidden" name="reviewId" value={review._id} />
          )}
          <Input
            type="text"
            label="Name"
            name="name"
            length={20}
            initialValue={review?.name || ""}
          />
          <Input
            type="text"
            label="Job"
            name="job"
            length={20}
            initialValue={review?.job || ""}
          />
          <TextArea
            name="comment"
            label="Comment"
            length={50}
            initialValue={review?.comment || ""}
          />
          <NumberInput
            label="Rate"
            name="rate"
            min={0}
            max={5}
            initialValue={review?.rate || 0}
          />
        </InputsWrapper>
        <MediaWrapper>
          <FileInput name="image" label="Image" accept="jpg,jpeg,png" />
        </MediaWrapper>
      </Form>
    </form>
  );
}

export default UpdateForm;
