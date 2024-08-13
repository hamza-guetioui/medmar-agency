import mongoose, { Schema } from "mongoose";

import { ICustomer } from "@/Types";

const customerSchema = new Schema<ICustomer>(
  {
    fullName: {
      type: String,
      required: [true, "Customer Name is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Customer Name! It should only contain letters and spaces.`,
      },
      trim: true,
    },
    jobTitle: {
      type: String,
      required: [true, "Customer Job Title is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Job Title! It should only contain letters and spaces.`,
      },
    },
    avatarUrl: {
      type: String,
    },
    testimonial: {
      type: String,
      trim: true,
    },
    businessLogoUrl: {
      type: String,
    },
    rating: {
      type: Number,
      min: [0, "Rating should be greater than or equal to 0"],
      max: [5, "Rating should be less than or equal to 5"],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Customer =
  mongoose.models.Customer ||
  mongoose.model<ICustomer>("Customer", customerSchema);

export default Customer;
