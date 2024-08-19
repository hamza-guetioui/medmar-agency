import { getCustomer } from "../actions/Customers";
import { getProject } from "../actions/Projects";
import { removeFile, uploadFile } from "./handleFile";
import { validate_Id } from "./validate_Id";

// Function to validate project data before saving or updating
export const validateProjectData = async (
  formData: FormData,
  projectId?: string
): Promise<{ error?: string; data?: any }> => {
  try {
    // Extract and validate the customer ID from the FormData
    const customerId = formData.get("customerId") as string;
    if (!validate_Id(customerId)) {
      return { error: "Invalid customer ID format" };
    }

    // Fetch the customer details using the customer ID
    const customer = await getCustomer(customerId);
    if (!customer) {
      return { error: "Customer not found" };
    }

    // Extract project fields from the FormData
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const link = formData.get("link") as string;

    // Attempt to upload the preview image, returns fileName or null
    let previewImage = await uploadFile(formData, "previewImage");

    // Handle case where no new image is uploaded and projectId is provided
    if (!previewImage && projectId) {
      try {
        // Fetch existing project details by ID
        const project = await getProject(projectId);
        // Use the existing preview image if available
        previewImage = project.previewImage;
      } catch (error) {
        // Return an error if project details cannot be fetched
        return {
          error: "Failed to fetch project details. Please try again later.",
          data: null,
        };
      }
    }

    // Check if all required fields are present and valid
    if (!title || !description || !previewImage) {
      // If validation fails, remove the uploaded preview image file
      if (previewImage) await removeFile(previewImage);
      return {
        error: "Project title, description, and preview image are required.",
      };
    }

    // Extract and validate the services associated with the project
    const servicesJson = formData.get("services") as string;
    const serviceIds = JSON.parse(servicesJson) as Array<string>;

    // Ensure at least one service is selected
    if (serviceIds.length <= 0) {
      if (previewImage) await removeFile(previewImage);
      return { error: "Please select at least one service." };
    }

    // Extract and sanitize the project details
    const detailsJson = formData.get("details") as string;
    const detailsArray = JSON.parse(detailsJson) as Array<{
      _id: string;
      feature: string;
      description: string;
    }>;

    // Remove `_id` from each object in the `details` array
    const sanitizedDetails = detailsArray.map((detail) => ({
      feature: detail.feature,
      description: detail.description,
    }));

    // Construct the data object to be returned
    const data = {
      title,
      description,
      previewImage,
      serviceIds,
      link,
      customerId,
      details: sanitizedDetails,
    };

    // Return the validated and sanitized data
    return { data };
  } catch (error) {
    // Handle any unexpected errors during validation
    console.error("Validation error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
