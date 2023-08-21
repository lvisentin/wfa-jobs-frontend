import { JobFilters, JobLocation, JobType } from "@/shared/models/Job.model";
import jobsService from "@/shared/services/JobsService";
import React, { useEffect, useState } from "react";
export interface FiltersProps {
  onChange: (val: JobFilters) => void;
}

function Filters({ onChange }: FiltersProps) {
  const [filters, setFilters] = useState<JobFilters>({
    location: [],
    fields: [],
    types: [],
  });
  const [minSalary, setMinSalary] = useState<number>(0);
  const [maxSalary, setMaxSalary] = useState<number>(0);
  const [fields, setFields] = useState<Array<any>>([]);

  useEffect(() => {
    getJobFields();
  }, []);

  useEffect(() => {
    onChange(filters);
  }, [filters]);

  useEffect(() => {
    addFilter("minSalary", minSalary, "value");
    addFilter("maxSalary", maxSalary, "value");
  }, [minSalary, maxSalary]);

  function getJobFields() {
    jobsService.getFields().then((fields) => setFields(fields));
  }

  function addFilter(
    name: keyof JobFilters,
    value: any,
    type: "list" | "value"
  ) {
    if (type === "value") {
      setFilters((oldFilters) => ({ ...oldFilters, [name]: value }));
      return;
    }


    setFilters((oldFilters: JobFilters) => {
      const values: Array<any> = oldFilters[name];
      if (values.includes(value)) {
        values.splice(values.indexOf(value), 1);
        oldFilters[name] = values;

        return { ...oldFilters };
      }
      values.push(value);
      oldFilters[name] = values;

      return { ...oldFilters };
    });
  }

  return (
    <>
      <div className="filters prose">
        <h3 className="prose-h3 mb-2">Location</h3>

        <div className="filter flex items-center gap-2">
          <input
            name="location"
            type="checkbox"
            checked={filters.location.includes(JobLocation.REMOTE)}
            value={JobLocation.REMOTE}
            onChange={() => addFilter("location", JobLocation.REMOTE, "list")}
            className="checkbox"
          />
          <label htmlFor="location prose-p">Remoto</label>
        </div>

        <div className="filter flex items-center gap-2">
          <input
            name="location"
            type="checkbox"
            checked={filters.location.includes(JobLocation.IN_SITE)}
            value={JobLocation.IN_SITE}
            onChange={() => addFilter("location", JobLocation.IN_SITE, "list")}
            className="checkbox"
          />
          <label htmlFor="location prose-p">Presencial</label>
        </div>

        <div className="filter flex items-center gap-2">
          <input
            name="location"
            type="checkbox"
            checked={filters.location.includes(JobLocation.HYBRID)}
            value={JobLocation.HYBRID}
            onChange={() => addFilter("location", JobLocation.HYBRID, "list")}
            className="checkbox"
          />
          <label htmlFor="location prose-p">Híbrido</label>
        </div>

        <h3 className="prose-h3 mb-2 mt-4">Salary</h3>

        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Min."
            className="input input-bordered w-full max-w-xs"
            value={minSalary}
            onChange={(val) => setMinSalary(Number(val.target.value))}
          />
          <label className="label">
            <span className="label-text-alt">de</span>
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Max."
            className="input input-bordered w-full max-w-xs"
            value={maxSalary}
            onChange={(val) => setMaxSalary(Number(val.target.value))}
          />
          <label className="label">
            <span className="label-text-alt">até</span>
          </label>
        </div>

        <h3 className="prose-h3 mb-2 mt-4">Área de atuação</h3>

        {fields.length > 0 &&
          fields.map((field, key) => (
            <div className="filter flex items-center gap-2" key={key}>
              <input
                name="location"
                type="checkbox"
                checked={filters.fields.includes(field.id)}
                value={field.id}
                onChange={() => addFilter("fields", field.id, "list")}
                className="checkbox"
              />
              <label htmlFor="location prose-p">{field.name}</label>
            </div>
          ))}
      </div>
    </>
  );
}

export default Filters;
