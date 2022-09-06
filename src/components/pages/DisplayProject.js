import React from "react";
import { Link } from "react-router-dom";
import "./css/DisplayProject.css"

const DisplayProject = ({ projectdata, deleteProject }) => {
  return (
    <div className="table-container">
      <Link className="add-project-button" to="/add-project">Add Project</Link>
      <table className="table">
        <thead>
          <tr>
            <th className="column">Project Id</th>
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
                  <td className="row">{projectdata.p_id}</td>
                  <td className="row">{projectdata.project_name}</td>
                  <td className="row">{projectdata.emp_id.map((emp,i)=>{
                    return (
                      <li key={i}>{emp}</li>
                    )
                  })}</td>
                  <td className="row">
                    <button
                      className="delete-button"
                      onClick={(event) =>
                        deleteProject(projectdata.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayProject;
