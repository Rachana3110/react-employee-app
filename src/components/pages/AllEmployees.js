import React from "react";
import inputs from "../data/inputs";
import "./css/AllEmployee.css";

const AllEmployees = ({ empdata }) => {
  // const [employeeData, setEmployeeData] = useState(empdata);

  // const handleSearch = (searchValue) => {
  //   if (searchValue) {
  //     const filterData =
  //       empdata &&
  //       empdata.filter((emp) => {
  //         return emp.emp_id === searchValue;
  //       });
  //     if (filterData.length !== 0) {
  //       setEmployeeData(filterData);
  //     } else setEmployeeData();
  //   } else setEmployeeData(empdata);
  // };
  return (
    <div className="display-container">
      {/* <div className="search-container">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <p style={{ textAlign: "center" }}>*Search using Employee Id</p> */}
      <div className="table-container">
        {inputs.map((input, i) => {
          return (
            <React.Fragment key={i}>
              {input.label !== "Password" && (
                <table className="table">
                  <thead>
                    <tr>
                      <th className="column" key={i}>
                        {input.label}
                      </th>
                    </tr>
                  </thead>
                  {empdata &&
                    empdata.map((employee, i) => {
                      return (
                        <tbody key={i}>
                          <tr>
                            <td className="row">{employee[input.name]}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AllEmployees;
