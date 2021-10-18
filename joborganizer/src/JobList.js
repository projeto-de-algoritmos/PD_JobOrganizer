import React, { useEffect, useState } from "react";

export const JobList = () => {
  const [jobs, setJobs] = useState([]);

  /*useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      });
  }, []);*/

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-preview" key={job.id}>
          <h2>{job.title}</h2>
          <h2>{job.comeco}</h2>
          <h2>{job.fim}</h2>
          <h2>{job.peso}</h2>
        </div>
      ))}
    </div>
  );
};
