import { getMember } from "../actions/Members";
import { removeFile, uploadFile } from "./handleFile";

// Function to validate member data before saving or updating
export const validateMemberData = async (
  formData: FormData,
  memberId?: string
): Promise<{ error?: string; data?: any }> => {
  try {
    // Extracting form fields from the FormData
    const fullName = formData.get("fullName") as string;
    const position = formData.get("position") as string;
    const bio = formData.get("bio") as string;
    const facebook = formData.get("facebook") as string;
    const instagram = formData.get("instagram") as string;
    const linkedin = formData.get("linkedin") as string;

    let profile = await uploadFile(formData, "profile"); // Upload profile image and get the file name or null

    // Handle existing member data if memberId is provided and no new profile image is uploaded
    if (profile === null && memberId) {
      try {
        // Fetch existing member details by ID
        const member = await getMember(memberId);
        // Use existing profile image if no new image is uploaded
        profile = member.profile || null;
      } catch (error) {
        // Return an error if member details cannot be fetched
        return {
          error: "Failed to fetch member details. Please try again later.",
          data: null,
        };
      }
    }

    // Validation: Check if required fields are present
    if (!fullName || !position || !profile) {
      // Remove uploaded files if validation fails
      await removeFile(profile);
      return {
        error: "Member's full name, position, and profile image are required.",
        data: null,
      };
    }

    // Construct the data object to be returned
    const data = {
      fullName,
      position,
      profile,
      bio,
      facebook,
      instagram,
      linkedin,
    };

    // Return the validated and sanitized data
    return { data };
  } catch (error) {
    // Handle any unexpected errors during validation
    console.error("Validation error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
