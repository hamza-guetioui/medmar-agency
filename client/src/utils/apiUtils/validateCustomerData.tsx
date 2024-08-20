import { getCustomer } from "../actions/Customers";
import { removeFile, uploadFile } from "./handleFile";

// Function to validate customer data before saving or updating
export const validateCustomerData = async (
  formData: FormData,
  customerId?: string
): Promise<{ error?: string; data?: any }> => {
  try {
    // Extracting form fields from the FormData
    const fullName = formData.get("fullName") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const testimonial = formData.get("testimonial") as string | null;
    const rating = parseFloat(
      formData.get("rating")?.toString() || "0"
    ) as Number | null; // Parse rating as a float or set to 0
    const published = formData.get("published") === "on"; // Convert 'published' checkbox value to boolean

    let avatar = await uploadFile(formData, "avatar"); // Upload avatar image and get the file name or null
    let businessLogo = await uploadFile(formData, "businessLogo"); // Upload business logo image and get the file name or null

    // Handle existing customer data if customerId is provided
    if (avatar === null && customerId) {
      try {
        // Fetch existing customer details by ID
        const customer = await getCustomer(customerId);
        if (customer) {
          avatar = customer.avatar || null;
          businessLogo = customer.businessLogo || null;
        }
        // Use existing avatar and business logo if no new images are uploaded
      } catch (error) {
        // Return an error if customer details cannot be fetched
        return {
          error: "Failed to fetch customer details. Please try again later.",
          data: null,
        };
      }
    }

    // Validation: Check if required fields are present
    if (!fullName || !jobTitle || !avatar) {
      // Remove uploaded files if validation fails
      await removeFile(avatar);
      await removeFile(businessLogo);
      return {
        error: "Full name, job title, and avatar are required.",
        data: null,
      };
    }

    // Construct the data object to be returned
    const data = {
      fullName,
      jobTitle,
      email,
      phone,
      avatar,
      testimonial,
      businessLogo,
      rating,
      published,
    };

    // Return the validated and sanitized data
    return { data };
  } catch (error) {
    // Handle any unexpected errors during validation
    console.error("Validation error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
