import React from "react";
import { Link, useNavigate } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import "./css/DisplayProject.css";

const DisplayProject = ({
  projectdata,
  empdata,
  deleteProject,
  handleEmployeeUpdate,
  handleProjectUpdate,
}) => {
  const navigate = useNavigate();
  const handleRemoveEmp = (empid, projectInfo) => {
    const filteredEmpData = empdata.filter((employee) => {
      return employee.id === parseInt(empid);
    })[0];
    const currentProject = filteredEmpData && filteredEmpData.current_project;
    const newEmployeeData = {
      ...filteredEmpData,
      previous_project: currentProject,
      current_project: "",
    };
    handleEmployeeUpdate(parseInt(empid), newEmployeeData);

    const projectIndex = projectInfo.emp_id.indexOf(empid);
    if (projectIndex > -1) {
      projectInfo.emp_id.splice(projectIndex, 1);
    }
    handleProjectUpdate(projectInfo.id, projectInfo);
  };
  return (
    <>
      <button className="add-project" onClick={() => navigate("/add-project")}>
        Add Project
      </button>
      <div className="display-container">
        <table className="project-table">
          <thead>
            <tr>
              {projectinputs.map((input, i) => {
                return <th className="project-column">{input.label}</th>;
              })}
              <th className="project-column">Employees</th>
              <th className="project-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {projectdata && projectdata.length !== 0 ? (
              projectdata.map((project, i) => {
                return (
                  <tr>
                    {projectinputs.map((input, i) => {
                      return (
                        <td className="project-row">{project[input.name]}</td>
                      );
                    })}
                    <td className="project-row">
                      {project.emp_id.map((id, key) => {
                        return (
                          <div key={key}>
                            <label className="label">Employee Id </label>
                            <div className="project-value">
                              <Link to={`/employeelist/${id}`}>{id}</Link>
                              <div>
                                <button
                                  onClick={() => handleRemoveEmp(id, project)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </td>
                    <td className="project-row">
                      <button
                        className="add-employee-button"
                        onClick={() => {
                          navigate(`/addemployee-to-project/${project.id}`);
                        }}
                      >
                        Add Employee
                      </button>
                      <Link
                        className="edit-project-link"
                        to={`/editproject/${project.id}`}
                      >
                        Edit
                      </Link>
                      {project.emp_id.length === 0 && (
                        <button
                          className="delete-button"
                          onClick={(event) => deleteProject(project.id)}
                        >
                          Delete Project
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No projects found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div></div>
      </div>
    </>
  );
};

export default DisplayProject;
