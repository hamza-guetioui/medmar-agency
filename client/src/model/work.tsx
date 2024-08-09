import mongoose, { Schema } from "mongoose";

interface IWork {
  title: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  videoDescription?: string;
  additionalInfo?: string[];
}

const workSchema = new Schema<IWork>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      validate: {
        validator: function (v: string): boolean {
          return /^[a-zA-Z0-9\s.,\-:!]+$/.test(v);
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
    imageSrc: { type: String, required: [true, "Image Source is required"] },
    videoSrc: { type: String },
    videoDescription: { type: String },
    additionalInfo: {
      type: [String],
      validate: {
        validator: (arr: string[]): boolean => {
          const maxLenght = 20;
          return validAdditionalString(arr, maxLenght);
        },
        message:
          "Each entry in additional Info should be 20 characters or less",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Work =mongoose.models.Work || mongoose.model<IWork>("Work", workSchema);

export default Work;

function validAdditionalString(arr: string[], len: number) {
  const isValid = arr.every((e) => e.length <= len);

  return isValid;
}
