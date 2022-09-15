import React, { useState } from "react";
import inputs from "../data/inputs";
import "./css/AllEmployee.css";

const AllEmployees = ({ empdata }) => {
  const [employeeData, setEmployeeData] = useState(empdata);

  const handleSearch = (searchValue) => {
    if (searchValue) {
      const filterData =
        empdata &&
        empdata.filter((emp) => {
          return emp.emp_id === searchValue;
        });
      if (filterData.length !== 0) {
        setEmployeeData(filterData);
      } else setEmployeeData();
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
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <p style={{ textAlign: "center" }}>*Search using Employee Id</p>
      <div className="table-container">
        {inputs.map((input, i) => {
          return (
            <>
              {input.label !== "Password" && (
                <table className="table">
                  <thead>
                      <th className="column" key={i}>
                        {input.label}
                      </th>
                  </thead>
                  {employeeData &&
                    employeeData.map((employee, i) => {
                      return (
                        <tbody>
                            <td className="row" key={i}>
                              {employee[input.name]}
                            </td>
                        </tbody>
                      );
                    })}
                </table>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllEmployees;
