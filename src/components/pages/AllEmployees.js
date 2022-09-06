import React, { useState } from "react";
import "./css/AllEmployee.css";

const AllEmployees = ({ empdata }) => {
  const [searchInput, setSearchInput] = useState();
  const [employeeData, setEmployeeData] = useState(empdata);

  const handleSearch = () => {
    if (searchInput) {
      const filterData =
        empdata &&
        empdata.filter((emp) => {
          return emp.emp_id === searchInput;
        });
      setEmployeeData(filterData);
    } else setEmployeeData(empdata);
  };
  return (
    <div className="display-container">
      <div className="search-container">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p style={{textAlign:"center"}}>*Search using Employee Id</p>
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
            {employeeData &&
              employeeData.map((employee, i) => {
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
    </div>
  );
};

export default AllEmployees;
