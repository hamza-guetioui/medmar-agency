import { getCustomer } from "../actions/Customers";
import {uploadFile } from "./handleFile";

export const validateCustomerData = async (
  formData: FormData,
  customerId?: string
): Promise<{ error?: string; data?: any }> => {
  // formData fields
  const fullName = formData.get("fullName") as String;
  const jobTitle = formData.get("jobTitle") as String;
  let avatar = await uploadFile(formData, "avatar"); // file name | null

  const email = formData.get("email") as String;
  const phone = formData.get("phone") as String;
  const testimonial = formData.get("testimonial") as String | null;
  const rating = parseFloat(
    formData.get("rating")?.toString() || "0"
  ) as Number | null;
  const published = formData.get("published") === "on"; // true | false
  let businessLogo = await uploadFile(formData, "businessLogo"); // file name | null

  if (avatar === null && customerId) {
    const custumer = await getCustomer(customerId);
    avatar = custumer.avatar || null;
  }
  if (businessLogo === null && customerId) {
    const custumer = await getCustomer(customerId);
    businessLogo = custumer.businessLogo || null;
  }

  if (!fullName || !jobTitle || !avatar) {
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
