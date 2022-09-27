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
  const currProjectData = currentEmployee[0];

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
          {currProjectData.current_project === "" && currProjectData.previous_project === "" ? (
            <div>No Project Data found</div>
          ) : (
            <div className="info-block">
              <label className="project-label">Current Project</label>
              <div className="project-value">
                {currProjectData.current_project
                  ? currProjectData.current_project
                  : "No current project found"}
              </div>
              <label className="project-label">Previous Project</label>
              <div className="project-value">
                {currProjectData.previous_project
                  ? currProjectData.previous_project
                  : "No previous project found"}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectInformation;
