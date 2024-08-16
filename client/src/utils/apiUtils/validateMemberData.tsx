import { getMember } from "../actions/Members";
import { removeFile, uploadFile } from "./handleFile";

export const validateMemberData = async (
  formData: FormData,
  memberId?: string
): Promise<{ error?: string; data?: any }> => {
  const fullName = formData.get("fullName") as string;
  const position = formData.get("position") as string;
  let profile = await uploadFile(formData, "profile"); // fileName || null
  const bio = formData.get("bio") as string;
  const facebook = formData.get("facebook") as string;
  const instagram = formData.get("instagram") as string;
  const linkedin = formData.get("linkedin") as string;


  if (profile === null && memberId) {
    try {
      const member = await getMember(memberId);
      profile = member.profile || null;
    } catch (error) {
      return {
        error: "Failed to fetch member details. Please try again later.",
        data: null,
      };
    }
  }


  if (!fullName || !position || !profile) {
    await removeFile(profile)
    return {
      error: "Member's full name, position, and profile image are required.",
      data: null,
    };
  }

  const data = {
    fullName,
    position,
    profile,
    bio,
    facebook,
    instagram,
    linkedin,
  };

  return { data };
};
