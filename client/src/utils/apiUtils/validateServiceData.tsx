import { getService } from "../actions/Services";
import { removeFile, uploadFile } from "./handleFile";

export const validateServiceData = async (
  formData: FormData,
  serviceId?: string
): Promise<{ error?: string; data?: any }> => {
  // Extract form fields
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  let image = await uploadFile(formData, "image"); // fileName || null
  const link = formData.get("link") as string;

  let detailsJson = formData.get("details") as string; // Details as JSON string
  const detailsArray = JSON.parse(detailsJson) as Array<{
    _id: string;
    detail: string;
  }>; // Parse and validate details

  // Handle image if serviceId is provided and no new image is uploaded
  if (image === null && serviceId) {
    try {
      const service = await getService(serviceId);
      image = service.image || null;
    } catch (error) {
      return {
        error: "Failed to fetch service details. Please try again later.",
        data: null,
      };
    }
  }

  if (
    !title ||
    !description ||
    !(detailsArray.length >= 1) ||
    !image ||
    !link
  ) {
    await removeFile(image);
    return {
      error: "All service's fields are required.",
      data: null,
    };
  }

  // Remove `_id` from each object in the `details` array
  const sanitizedDetails = detailsArray.map((item) => ({
    detail: item.detail, // Include only the `detail` field & mongoose will generate the _id
  }));

  const data = {
    title,
    description,
    details: sanitizedDetails,
    image,
    link,
  };

  return { data };
};
