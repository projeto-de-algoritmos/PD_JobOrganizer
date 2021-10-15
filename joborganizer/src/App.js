import "./index.css";
import React from "react";
import { NewJob } from "./NewJob";
import { JobList } from "./JobList";

export const App = () => {
  return (
    <>
      <h1 className="title">Bem vindo ao Job Organizer!</h1>
      <NewJob />
      <JobList />
    </>
  );
};
