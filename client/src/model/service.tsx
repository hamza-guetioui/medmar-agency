import mongoose, { Schema } from "mongoose";

import { IService , IServiceDetail } from "@/Types";

const serviceDetailSchema = new Schema<IServiceDetail>({
  detail: {
    type: String,
    required: [true, 'Detail is required'],
    minlength: [3, 'Detail must be at least 3 characters long'],
    maxlength: [25, 'Detail cannot exceed 25 characters'],
  },
});
const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Service title is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s&|_-]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Service Title! It should only contain letters, spaces, &, |, _, and -.`,
      },
      trim: true,
      minlength: [3, "Service title must be at least 3 characters long"],
      maxlength: [30, "Service title cannot exceed 30 characters"],
    },

    description: {
      type: String,
      required: [true, "Service description is required"],
      trim: true,
      minlength: [
        10,
        "Service description must be at least 10 characters long",
      ],
      maxlength: [500, "Service description cannot exceed 500 characters"],
    },

    image: {
      type: String,
      required: [true, "Service image is required"],
    },

    link: {
      type: String,
      required: [true, "Service link is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?(\?.*)?$/.test(
            v
          );
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid URL!`,
      },
      trim: true,
    },
    details: {
      type:  [serviceDetailSchema],
      validate: [
        {
          validator: function (array) {
            return array.length >= 3;
          },
          message: "The details array must contain at least 3 items.",
        },
      ],
    },
  },

  {
    timestamps: true,
  }
);

const Service =
  mongoose.models.Service || mongoose.model<IService>("Service", serviceSchema);

export default Service;
