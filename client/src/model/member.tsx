import mongoose, { Schema } from "mongoose";

import { IMember } from "@/Types";

const memberSchema = new Schema<IMember>(
  {
    fullName: {
      type: String,
      required: [true, "Member Name is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s.,]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Member Name ! It should only contain letters and spaces.`,
      },
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Member Position Title is required"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z\s.,\-|]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Position Title! It should only contain letters,spaces '-' or '|'.`,
      },
    },
    profile: {
      type: String,
      required: [true, "Member Profile Image is required"],
    },
    bio: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Member =
  mongoose.models.Member || mongoose.model<IMember>("Member", memberSchema);

export default Member;
