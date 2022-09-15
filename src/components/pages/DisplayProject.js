import React from "react";
import { Link, useNavigate } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import "./css/DisplayProject.css";

const DisplayProject = ({ projectdata, deleteProject }) => {
  const navigate = useNavigate();
  console.log(projectdata);
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
              <th className="project-column">Employee Id</th>
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
                      {projectdata.emp_id.map((emp, i) => {
                        return (
                          <ul key={i}>
                            <li>{emp}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td className="project-row">
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

        {/* <table className="table">
          <thead>
            <tr>
              <th className="column">Project Name</th>
              <th className="column">Employee Id</th>
              <th className="column">Action</th>
            </tr>
          </thead>
          <tbody>
            {projectdata &&
              projectdata.map((projectdata, i) => {
                return (
                  <tr key={i}>
                    <td className="row">{projectdata.project_name}</td>
                    <td className="row">
                      {projectdata.emp_id &&
                        projectdata.emp_id.map((emp, i) => {
                          return (
                            <ul key={i}>
                              <li>{emp}</li>
                            </ul>
                          );
                        })}
                    </td>
                    <td className="row">
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
        </table> */}
      </div>
    </>
  );
};

export default DisplayProject;
