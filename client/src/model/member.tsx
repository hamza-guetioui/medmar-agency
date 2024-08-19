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
          `${value} is not a valid Member Name! It should only contain letters, spaces, periods, and commas.`,
      },
      minlength: [3, "Member Name must be at least 3 characters long"],
      maxlength: [100, "Member Name cannot exceed 100 characters"],
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
          `${value} is not a valid Position Title! It should only contain letters, spaces, periods, commas, '-', or '|'.`,
      },
      minlength: [
        3,
        "Member Position Title must be at least 3 characters long",
      ],
      maxlength: [100, "Member Position Title cannot exceed 100 characters"],
      trim: true,
    },
    profile: {
      type: String,
      required: [true, "Member Profile Image is required"],
    },
    bio: {
      type: String,
      trim: true,
      minlength: [3, "Member bio must be at least 3 characters long"],
      maxlength: [255, "Member bio cannot exceed 255 characters"],
    },
    facebook: {
      type: String,
      trim: true,
      validate: {
        validator: function (v: string): boolean {
          return /^(https?:\/\/)?((www\.)?facebook\.com|fb\.com)\/[\w.-]+$/.test(
            v
          );
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Facebook URL!`,
      },
    },
    instagram: {
      type: String,
      trim: true,
      validate: {
        validator: function (v: string): boolean {
          return /^(https?:\/\/)?((www\.)?instagram\.com)\/[\w.-]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Instagram URL!`,
      },
    },
    linkedin: {
      type: String,
      trim: true,
      validate: {
        validator: function (v: string): boolean {
          return /^(https?:\/\/)?((www\.)?linkedin\.com)\/in\/[\w.-]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid LinkedIn URL!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Member =
  mongoose.models.Member || mongoose.model<IMember>("Member", memberSchema);

export default Member;
