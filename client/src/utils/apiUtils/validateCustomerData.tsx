import { getCustomer } from "../actions/Customers";
import {removeFile, uploadFile } from "./handleFile";

export const validateCustomerData = async (
  formData: FormData,
  customerId?: string
): Promise<{ error?: string; data?: any }> => {
  // formData fields

  const fullName = formData.get("fullName") as string;
  const jobTitle = formData.get("jobTitle") as string;
  let avatar = await uploadFile(formData, "avatar"); // file name | null

  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const testimonial = formData.get("testimonial") as string | null;
  const rating = parseFloat(
    formData.get("rating")?.toString() || "0"
  ) as Number | null;
  const published = formData.get("published") === "on"; // true | false
  let businessLogo = await uploadFile(formData, "businessLogo"); // file name | null

  if (customerId) {
    try {
      const customer = await getCustomer(customerId);
      avatar = avatar || customer.avatar || null;
      businessLogo = businessLogo || customer.businessLogo || null;
    } catch (error) {
      return {
        error: "Failed to fetch customer details. Please try again later.",
        data: null,
      };
    }
  }

  if (!fullName || !jobTitle || !avatar) {
    await removeFile(avatar)
    await removeFile(businessLogo)
    return {
      error: "Full name, job title, and avatar are required.",
      data: null,
    };
  }

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
  return {
    data,
  };
};
