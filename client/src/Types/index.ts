import mongoose, { Types } from "mongoose";

export interface ICustomer {
  _id: Types.ObjectId;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  avatar: string;
  testimonial?: string;
  rating?: number;
  businessLogo?: string;
  published: boolean;
}

export interface IMember {
  _id: Types.ObjectId;
  fullName: string;
  position: string;
  profile: string;
  bio?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface IServiceDetail {
  _id: Types.ObjectId;
  detail: string;
}
export interface IService {
  _id: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  link: string;
  details: IServiceDetail[];
}

export interface IProjectDetail {
  _id: Types.ObjectId;
  feature: string;
  description: string;
}

export interface IProject {
  _id: Types.ObjectId;
  title: string;
  description: string;
  previewImage: string;
  customerId: mongoose.Types.ObjectId;
  serviceIds: mongoose.Types.ObjectId[];
  link?: string;
  details?: IProjectDetail[];
}

// response return
export interface IProjectData {
  _id: Types.ObjectId;
  title: string;
  description: string;
  previewImage: string;
  customer: ICustomer;
  services: IService[];
  link?: string;
  details?: IProjectDetail[];
}
