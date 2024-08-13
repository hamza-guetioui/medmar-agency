export const validateCustomerData = (
  formData: FormData
): { error?: string; data?: any } => {
  const fullName = formData.get("fullName");
  const jobTitle = formData.get("jobTitle");
  const avatarUrl = formData.get("avatarUrl");
  const testimonial = formData.get("testimonial");
  const businessLogo = formData.get("businessLogo");
  const rating = parseFloat(formData.get("rating")?.toString() || "0");
  const published = formData.get("published") === "true";

  if (!fullName || !jobTitle) {
    return {
      error: "Customer fullName and JobTitle  are required",
      data: null,
    };
  }

  const data = {
    fullName,
    jobTitle,
    avatarUrl,
    testimonial,
    businessLogo,
    rating,
    published,
  };
  return {
    data,
  };
};
