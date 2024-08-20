import { getService } from "../actions/Services";
import { removeFile, uploadFile } from "./handleFile";

// Function to validate service data before saving or updating
export const validateServiceData = async (
  formData: FormData,
  serviceId?: string
): Promise<{ error?: string; data?: any }> => {
  try {
    // Extract form fields from the FormData object
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const link = formData.get("link") as string;

    // Attempt to upload the image file, returns fileName or null
    let image = await uploadFile(formData, "image");

    // Retrieve the `details` field as a JSON string and parse it into an array
    let detailsJson = formData.get("details") as string;
    const detailsArray = JSON.parse(detailsJson) as Array<{
      _id: string;
      detail: string;
    }>;

    // Handle image case when `serviceId` is provided but no new image is uploaded (Edit)
    if (image === null && serviceId) {
      try {
        // Fetch existing service details by ID
        const service = await getService(serviceId);
        if (service) {
          // Use the existing image if available
          image = service.image || null;
        }
      } catch (error) {
        // Return an error if service details cannot be fetched
        return {
          error: "Failed to fetch service details. Please try again later.",
          data: null,
        };
      }
    }

    // Check if all required fields are present and valid
    if (
      !title ||
      !description ||
      !(detailsArray.length >= 1) ||
      !image ||
      !link
    ) {
      // If validation fails, remove the uploaded image file
      await removeFile(image);
      return {
        error: "All service's fields are required.",
        data: null,
      };
    }

    // Sanitize the `details` array by removing the `_id` field from each object, mongoDb will generate the _id
    const sanitizedDetails = detailsArray.map((item) => ({
      detail: item.detail, // Include only the `detail` field;
    }));

    // Construct the data object to be returned
    const data = {
      title,
      description,
      details: sanitizedDetails,
      image,
      link,
    };

    // Return the validated and sanitized data
    return { data };
  } catch (error) {
    // Handle any unexpected errors during validation
    console.error("Validation error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
