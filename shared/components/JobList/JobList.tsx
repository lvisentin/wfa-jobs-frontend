import fadeUpTransitions from "@/shared/animations/animations";
import { Job, JobFilters } from "@/shared/models/Job.model";
import jobsService from "@/shared/services/JobsService";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import { motion } from "framer-motion";
import Filters from "../Filters/Filters";

export interface JobListProps {}

function JobList() {
  const [jobs, setJobs] = useState<Array<Job>>([]);

  useEffect(() => {
    getJobs();
  }, []);

  function getJobs(filters: JobFilters = {}) {
    jobsService.getJobs(filters).then((jobs) => {
      setJobs(jobs);
    });
  }

  function handleFilterChange(filters: JobFilters) {
    setTimeout(() => getJobs(filters), 500);
  }

  return (
    <motion.div
      variants={fadeUpTransitions.variants}
      initial="hidden"
      animate="enter"
      className="w-full"
      exit="exit"
      transition={fadeUpTransitions.transition}
    >
      <div className="flex items-start gap-4 w-full">
        <div className="flex flex-col gap-4 w-52">
          <Filters onChange={(val: JobFilters) => handleFilterChange(val)} />

          <button
            className="btn btn-primary"
            onClick={() => getJobs({ location: [], fields: [], types: [] })}
          >
            Limpar Filtros
          </button>
        </div>

        <div className="w-full h-full max-h-[90%] overflow-auto">
          {jobs.length > 0 &&
            jobs.map((job, key) => <JobCard key={key} job={job}></JobCard>)}
        </div>
      </div>
    </motion.div>
  );
}

export default JobList;
