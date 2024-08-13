import mongoose, { Schema } from "mongoose";
import { IProject } from "@/Types";

interface IProjectWithCustomerId extends IProject {
  customerId: mongoose.Types.ObjectId; // Reference to Customer
}

const projectDetailSchema = new mongoose.Schema({
  feature: {
    type: String,
    validate: {
      validator: (value: string): boolean => value.length <= 20,
      message: "Feature should be 20 characters or less",
    },
  },
  description: {
    type: String,
    validate: {
      validator: (value: string): boolean => value.length <= 255,
      message: "Description should be 255 characters or less",
    },
  },
});

const projectSchema = new Schema<IProjectWithCustomerId>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z0-9\s.,\-:!#]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid Title! It should only contain letters and spaces.`,
      },
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    coverImageUrl: {
      type: String,
      required: [true, "Image Source is required"],
    },
    type: {
      type: String,
      required: [true, "Project Category is required"],
    },
    link: {
      type: String,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer", // Reference to Customer model
      required: true,
    },
    details: {
      type: [projectDetailSchema],
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model<IProjectWithCustomerId>("Project", projectSchema);

export default Project;
