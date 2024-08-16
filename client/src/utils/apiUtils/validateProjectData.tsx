export const validateProjectData = (
  formData: FormData,
  customerId: string
): { error?: string; data?: any } => {



  const title = formData.get("title");
  const description = formData.get("description");
  const coverImageUrl = formData.get("coverImageUrl");
  const type = formData.get("type");
  const link = formData.get("link");
  const details = formData.get("details");

  if (!title || !description || !coverImageUrl || !type) {
    return {
      error: "Project title, description, coverImageUrl, and type are required",
    };
  }
  const data = {
    title,
    description,
    coverImageUrl,
    type,
    link,
    customerId,
    details,
  };

  return {
    data,
  };
};


