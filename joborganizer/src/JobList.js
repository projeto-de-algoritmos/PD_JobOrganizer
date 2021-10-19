import React, { useEffect, useState } from "react";

export const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="lista">
      <h1>Lista de Trabalhos</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-preview" key={job.id}>
            <h2 className="title">{job.title}</h2>
            <h2>Começo:  {job.comeco}</h2>
            <h2>Fim:  {job.fim}</h2>
            <h2>Lucro:  {job.peso}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
