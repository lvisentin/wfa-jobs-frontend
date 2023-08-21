import { Job } from "@/shared/models/Job.model";
import React from "react";
import { HomeIcon, ClockIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import styles from "./JobCard.module.css";

export interface JobCardProps {
  job: Job;
}

function JobCard({
  job: { id, name, salary, job_type, location },
}: JobCardProps) {
  function goToDetails(id: string) {
    console.log(id);
  }

  return (
    <>
      <div
        className="card w-full border-2 mb-4 cursor-pointer"
        onClick={() => goToDetails(id)}
      >
        <div className="card-body p-6">
          <h3 className="card-title m-0">{name}</h3>

          <div className="flex items-center perks gap-4">
            <div className="job-perk flex items-center gap-2">
              <HomeIcon className={`${styles.JobPerk}`}></HomeIcon>
              {location}
            </div>

            <div className="job-perk flex items-center gap-2">
              <BanknotesIcon className={`${styles.JobPerk}`}></BanknotesIcon>
              <span>{salary / 1000}k</span>
            </div>

            <div className="job-perk flex items-center gap-2">
              <ClockIcon className={`${styles.JobPerk}`}></ClockIcon>
              <span>{job_type}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
