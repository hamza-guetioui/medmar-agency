import mongoose, { Schema } from "mongoose";
import { IProject, IProjectDetail } from "@/Types";

// Schema for ProjectDetail
const projectDetailSchema = new mongoose.Schema<IProjectDetail>({
  feature: {
    type: String,
    required: [true, "Feature is required"],
    minlength: [3, "Feature should be 3 characters or more"],
    maxlength: [25, "Feature should be 25 characters or less"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description should be at least 10 characters long"],
    maxlength: [255, "Description should be 255 characters or less"],
    trim: true,
  },
});

// Schema for Project
const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      unique: true,
      minlength: [3, "Title should be at least 3 characters long"],
      maxlength: [100, "Title should be 100 characters or less"],
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z0-9\s.,\-:!#]+$/.test(v);
        },
        message: ({ value }: { value: string }) =>
          `${value} is not a valid title! It should only contain letters, numbers, and the following characters: spaces, commas, periods, hyphens, colons, exclamation marks, and hashes.`,
      },
    },
    description: {
      type: String,
      required: [true, "Project Description is required"],
      minlength: [10, "Description should be at least 10 characters long"],
      maxlength: [500, "Description should be 500 characters or less"],
      trim: true,
    },
    previewImage: {
      type: String,
      required: [true, "Preview image is required"],
    },
    serviceIds: {
      type: [Schema.Types.ObjectId],
      ref: "Service",
      required: true,
      validate: {
        validator: function (v: mongoose.Types.ObjectId[]): boolean {
          return v.length > 0; // Ensure the array contains at least one ObjectId
        },
        message: "Project should have at least one service.",
      },
    },
    link: {
      type: String,
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
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
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

projectSchema.statics.findByCustomer = function (
  customerId: mongoose.Types.ObjectId
) {
  return this.find({ customerId });
};
// Create or get the Project model
const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);
export default Project;
