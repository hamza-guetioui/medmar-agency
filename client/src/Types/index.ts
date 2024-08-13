export interface ICustomer {
  _id: string;
  fullName: string;
  jobTitle: string;
  avatarUrl?: string;
  testimonial?: string;
  rating?: number;
  businessLogoUrl?: string;
  published: boolean;
}

export interface IMember {
  _id: string;
  fullName: string;
  position: string;
  profileImage: string;
  bio?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

interface IProjectDetail {
  feature: string;
  description: string;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  type: string;
  link?: string;
  details?: IProjectDetail[];
}
