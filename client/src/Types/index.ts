import mongoose from "mongoose";

export interface ICustomer {
  _id: string;
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
  _id: string;
  fullName: string;
  position: string;
  profile: string;
  bio?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface IProjectServices {
  id: number;
  title: string;
}
export interface IProjectDetail {
  feature: string;
  description: string;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  customerId: mongoose.Types.ObjectId;
  services: IProjectServices[];
  link?: string;
  details?: IProjectDetail[];
}
