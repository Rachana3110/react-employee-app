import React from "react";
import { Link, useNavigate } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import "./css/DisplayProject.css";

const DisplayProject = ({ projectdata, empdata, deleteProject }) => {
  const navigate = useNavigate();
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
            {projectdata &&
              projectdata.map((projectdata, i) => {
                return (
                  <tr>
                    {projectinputs.map((input, i) => {
                      return (
                        <td className="project-row">
                          {projectdata[input.name]}
                        </td>
                      );
                    })}
                    <td className="project-row">
                      {projectdata.emp_id.map((id, key) => {
                        return (
                          <p key={key}>
                            <label className="label">Employee Id </label>
                            <div className="project-value">
                              <Link to={`/employeelist/${id}`}>{id}</Link>
                            </div>
                          </p>
                        );
                      })}
                    </td>
                    <td className="project-row">
                      <button
                        className="add-employee-button"
                        onClick={() => {
                          navigate(`/addemployee-to-project/${projectdata.id}`);
                        }}
                      >
                        Add Employee
                      </button>
                      <Link
                        className="edit-project-link"
                        to={`/editproject/${projectdata.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="delete-button"
                        onClick={(event) => deleteProject(projectdata.id)}
                      >
                        Delete Project
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div></div>
      </div>
    </>
  );
};

export default DisplayProject;
