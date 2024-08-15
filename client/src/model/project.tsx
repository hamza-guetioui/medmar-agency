import mongoose, { Schema } from "mongoose";
import { IProject, IProjectDetail, IProjectServices } from "@/Types";



const projectServicesSchema = new mongoose.Schema<IProjectServices>({
  id: {
    type: Number,
    required:true
  },
  title: {
    type: String,
    required:true
  },
});
const projectDetailSchema = new mongoose.Schema<IProjectDetail>({
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

const projectSchema = new Schema<IProject>(
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
    coverImage: {
      type: String,
      required: [true, "Image Source is required"],
    },
    services: [projectServicesSchema],
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
  mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export default Project;
