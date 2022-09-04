import React from "react";
import { Link } from "react-router-dom";

const AllEmployees = ({ empdata, handleDelete }) => {

  return (
    <div>
      <h3>Employees List</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstname</th>
            <th>designation</th>
          </tr>
        </thead>
        <tbody>
          {empdata.map((employee, i) => {
            return (
              <tr key={i}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.designation}</td>
                <td>
                  <button>
                    <Link to={`/edit/${employee.id}`}>Edit</Link>
                  </button>
                </td>
                <td>
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
