import React from "react";
import "./css/DisplayProject.css";
import DisplayProject from "./DisplayProject";

const ProjectInformation = ({
  currentEmployee,
  projectdata,
  deleteProject,
  empdata,
  handleEmployeeUpdate,
  handleProjectUpdate,
}) => {
  const currProjectData = currentEmployee[0].project;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Project Info</h2>
      {currentEmployee[0].designation === "Manager" ? (
        <DisplayProject
          projectdata={projectdata}
          empdata={empdata}
          deleteProject={deleteProject}
          handleEmployeeUpdate={handleEmployeeUpdate}
          handleProjectUpdate={handleProjectUpdate}
        />
      ) : (
        <div className="project-info-container">
          {currProjectData.length !== 0 ? (
            <div className="info-block">
              <label className="project-label">Current Project</label>
              <div className="project-value">
                {currProjectData[currProjectData.length - 1]}
              </div>
              <label className="project-label">Previous Project</label>
              <div className="project-value">
                {currProjectData.length !== 1
                  ? currProjectData[currProjectData.length - 2]
                  : "No previous project found"}
              </div>
            </div>
          ) : (
            <div>No Project Data found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectInformation;
