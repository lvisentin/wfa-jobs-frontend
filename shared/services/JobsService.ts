import { JobFilters } from "../models/Job.model";

class JobsService {
  async getJobs(filters: JobFilters = {}) {
    return await fetch(`http://localhost:3000/jobs/filter`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(filters),
    }).then((response) => response.json());
  }

  async getFields() {
    return await fetch(`http://localhost:3000/fields`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
  }
}

const jobsService = new JobsService();
export default jobsService;
