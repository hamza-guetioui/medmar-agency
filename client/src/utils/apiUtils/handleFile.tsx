import path from "path";
import fs from "fs/promises";
import { writeFile, unlink } from "fs/promises";

export const uploadFile = async (
  formData: FormData,
  fieldName: string
): Promise<string | null> => {
  // Retrieve the file from the formData
  const file = formData.get(fieldName) as File | null;
  // Return null if no file is provided or if the file name is invalid
  if (!file || !file.name || file.name === "undefined") {
    return null;
  }

  try {
    // Convert the file to a buffer for writing
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate a unique file name using the current timestamp
    const timestamp = new Date().getTime();
    const FileName = `${timestamp}`;

    // Define the upload path using the unique file name
    const uploadPath = path.join(process.cwd(), "public", "uploads", FileName);
    // Define the upload path using the unique file name
    await writeFile(uploadPath, buffer);

    // Return the file name if the upload is successful
    return FileName;
  } catch (error) {
    throw new Error(`Failed to upload file: ${error}`);
  }
};

export const removeFile = async (fileName: string | null): Promise<void> => {
  // Return early if no fileName is provided
  if (!fileName) return;
  try {
    // Define the file path based on the provided file name
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    // Check if the file exists before trying to remove it
    await fs.stat(filePath);

    // remove the file
    await unlink(filePath);
    return;
  } catch (error) {
    throw new Error(`Failed to remove file: ${error}`);
  }
};
