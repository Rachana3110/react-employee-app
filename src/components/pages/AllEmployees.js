import React from "react";
import "./css/AllEmployee.css";

const AllEmployees = ({ empdata }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="column">Employee ID</th>
            <th className="column">First Name</th>
            <th className="column">Designation</th>
          </tr>
        </thead>
        <tbody>
          {empdata.map((employee, i) => {
            return (
              <tr key={i}>
                <td className="row">{employee.emp_id}</td>
                <td className="row">{employee.first_name}</td>
                <td className="row">{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
