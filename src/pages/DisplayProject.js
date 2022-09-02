import React from "react";
import { ProjectConfig } from "../config/ProjectConfig";

const DisplayProject = () => {
  const data = JSON.parse(localStorage.getItem("project"));
  console.log(data);
  return (
    <div>
        Display all project
      {data && ProjectConfig.map((configdata) => {
        return (
          <div>
            {configdata.questionname} : {data[configdata.questionname]}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayProject;
