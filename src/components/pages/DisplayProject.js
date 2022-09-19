import React from "react";
import { Link, useNavigate } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import "./css/DisplayProject.css";

const DisplayProject = ({ projectdata, deleteProject }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="add-project-button"
        onClick={() => navigate("/add-project")}
      >
        Add Project
      </button>
      <div className="display-container">
        <table className="project-table">
          <thead>
            <tr>
              {projectinputs.map((input, i) => {
                return <th className="project-column">{input.label}</th>;
              })}
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
                      <button
                        onClick={() => {
                          navigate(
                            `/addemployee-to-project/${projectdata.id}`
                          );
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
                        Delete
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
