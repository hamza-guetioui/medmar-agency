
export const validateMemberData = (
  formData: FormData
): { error?: string; data?: any } => {
  const fullName = formData.get("fullName") as string | null;
  const position = formData.get("position") as string | null;
  const profileImage = formData.get("profileImage") as string | null;
  const bio = formData.get("bio")?.toString() ?? null;
  const facebook = formData.get("facebook") as string | null;
  const instagram = formData.get("instagram") as string | null;
  const linkedin = formData.get("linkedin") as string | null;

  if (!fullName || !position || !profileImage) {
    return {
      error: "Member fullName, position, and profileImage are required",
      data: null,
    };
  }
  const data = {
    fullName,
    position,
    profileImage,
    bio,
    facebook,
    instagram,
    linkedin,
  };

  return { data };
};
