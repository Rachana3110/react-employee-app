import React, { useState } from "react";
import "./css/DisplayProject.css";
import DisplayProject from "./DisplayProject";

const ProjectInformation = ({
  currentEmployee,
  projectdata,
  deleteProject,
}) => {
  const [currProjectData, setProjData] = useState(currentEmployee[0].project);

  return (
    <div>
      {currProjectData.length !== 0 ? (
        <>
          <p>Current Project : {currProjectData[currProjectData.length - 1]}</p>
          <p>
            previous Project :
            {currProjectData.length - 2 !== 0
              ? currProjectData[currProjectData.length - 2]
              : "No previous data found"}
          </p>
        </>
      ) : (
        <p>No Project Data found</p>
      )}
      <DisplayProject projectdata={projectdata} deleteProject={deleteProject} />
    </div>
  );
};

export default ProjectInformation;
