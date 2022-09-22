import React from "react";
import "./css/DisplayProject.css";
import DisplayProject from "./DisplayProject";

const ProjectInformation = ({
  currentEmployee,
  projectdata,
  deleteProject,
}) => {
  const currProjectData = currentEmployee[0].project;

  return (
    <div>
      {currentEmployee[0].designation === "Manager" ? (
        <DisplayProject
          projectdata={projectdata}
          deleteProject={deleteProject}
        />
      ) : (
        <>
          {currProjectData.length !== 0 ? (
            <>
              <p>
                Current Project : {currProjectData[currProjectData.length - 1]}
              </p>
              <p>
                Previous Project :
                {currProjectData.length !== 1
                  ? currProjectData[currProjectData.length - 2]
                  : "No previous data found"}
              </p>
            </>
          ) : (
            <p>No Project Data found</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectInformation;
