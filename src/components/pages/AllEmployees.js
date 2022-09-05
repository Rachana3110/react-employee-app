import React from "react";
import { Link } from "react-router-dom";
import "./css/AllEmployee.css";

const AllEmployees = ({ empdata, handleDelete }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="column-body">
            <th className="column">Employee ID</th>
            <th className="column">First Name</th>
            <th className="column">Designation</th>
            <th className="column">Action</th>
          </tr>
        </thead>
        <tbody>
          {empdata.map((employee, i) => {
            return (
              <tr className="row-body" key={i}>
                <td className="row">{employee.id}</td>
                <td className="row">{employee.first_name}</td>
                <td className="row">{employee.designation}</td>
                <td className="row">
                  <button>
                    <Link to={`/edit/${employee.id}`}>Edit</Link>
                  </button>
                </td>
                <td className="row">
                  <button onClick={() => handleDelete(employee.id)}>
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

export default AllEmployees;
