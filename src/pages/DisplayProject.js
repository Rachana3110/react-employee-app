import React from "react";
// import { ProjectConfig } from "../config/ProjectConfig";

const DisplayProject = () => {
  const projectDetails = JSON.parse(localStorage.getItem("projectData"));
  console.log(projectDetails);
  return (
    <div>
      Display all project
      {projectDetails.map((projectList) => {
        return <div>{projectList.Project_ID}</div>;
      })}
    </div>
  );
};

export default DisplayProject;
