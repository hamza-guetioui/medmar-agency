import path from "path";
import fs from "fs/promises";
import { writeFile, unlink } from "fs/promises";

export const uploadFile = async (
  formData: FormData,
  fieldName: string
): Promise<string | null> => {
  const file = formData.get(fieldName) as File | null;

  if (!file || !file.name || file.name === "undefined") {
    return null;
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate a unique name by appending a random string to the original file name
    const timestamp = new Date().getTime();

    const FileName = `${timestamp}`;

    const uploadPath = path.join(process.cwd(), "public", "uploads", FileName);

    await writeFile(uploadPath, buffer);

    return FileName;
  } catch (error) {
    throw new Error(`Failed to upload file: ${error}`);
  }
};

export const removeFile = async (fileName: string | null): Promise<void> => {
  if (!fileName) return;
  try {
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    // Check if the file exists before trying to remove it
    await fs.stat(filePath);
    // remove the file

    await unlink(filePath);

    console.log(`File ${fileName} removed successfully`);
  } catch (error) {
    throw new Error(`Failed to remove file: ${error}`);
  }
};
