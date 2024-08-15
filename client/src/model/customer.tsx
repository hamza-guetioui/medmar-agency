import mongoose, { Schema } from "mongoose";

import { ICustomer } from "@/Types";

const customerSchema = new Schema<ICustomer>(
  {
    fullName: {
      type: String,
      unique: true,
      required: [true, "Customer fullName is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s.,]+$/.test(v);
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
      trim: true,
    },
    avatar: {
      type: String,
      required: [true, "Customer avatar is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(?:\+212|0)(?:\d{9})$|^(?:\+\d{2})(?:\d{8,14})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, "User phone number required"],
    },
    testimonial: {
      type: String,
      trim: true,
    },
    businessLogo: {
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
