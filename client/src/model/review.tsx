import mongoose, { Schema } from "mongoose";

interface IReview {
  name: string;
  imageSrc:string;
  job: string;
  rate: number;
  comment: string;
}

const reviewSchema = new Schema<IReview>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique:true,
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Name! It should only contain letters and spaces.`,
      },
    },
    imageSrc: { type: String, required: [true, "Image Source is required"] },
    job: {
      type: String,
      required: [true, "Job is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid name! It should only contain letters and spaces.`,
      },
    },
    rate: {
      type: Number,
      required: true,
      min: [0, "Rate should be greater than or equal to 0"],
      max: [5, "Rate should be less than or equal to 5"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim:true,
      unique:true
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
