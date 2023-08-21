export interface Job {
  id: string;
  name: string;
  description: string;
  salary: number;
  job_type: JobType;
  company_id: string;
  location: JobLocation;
}

export enum JobType {
  fulltime = "fulltime",
  parttime = "part-time",
  internship = "intern",
}

export enum JobLocation {
  IN_SITE = "in-site",
  REMOTE = "remote",
  HYBRID = "hybrid",
}

// export interface JobFilters {
//   id?: string;
//   name?: string;
//   description?: string;
//   salary?: number;
//   job_type?: JobType;
//   location?: JobLocation;
//   field?: string;
// }

export interface JobFilters {
  minSalary?: number;
  maxSalary?: number;
  fields: String[];
  location: JobLocation[];
  types: JobType[];
}
