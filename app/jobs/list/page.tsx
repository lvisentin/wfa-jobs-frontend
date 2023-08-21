"use client";

import Filters from "@/shared/components/Filters/Filters";
import JobList from "@/shared/components/JobList/JobList";
import React from "react";

function JobsList() {
  return (
    <main className="main w-full">
      <div className={"prose w-full max-w-full flex flex-col gap-4 p-8"}>
        <h1 className={"prose-h2"}>All Jobs</h1>
        <JobList />
      </div>
    </main>
  );
}

export default JobsList;
