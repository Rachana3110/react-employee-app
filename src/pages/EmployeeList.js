import React from "react";
// import { RegisterConfig } from "../config/RegisterConfig";
import empData from "../data/empdata";

const EmployeeList = () => {
  console.log(empData);

  return (
    <div>
      {empData.map((list) => {
        return (
          <div
            style={{
              borderStyle: "solid",
              margin: "3%",
              width: "30%",
            }}
          >
            Employee Id : {list.Employee_ID_Number}
            <br />
            First_Name : {list.First_Name}
            <br />
            Designation : {list.Designation}
            <br />
            {/* {RegisterConfig.map((configdata) => {
              return (
                <div>
                  {configdata.questionname} : {list[configdata.questionname]}
                </div>
              );
            })} */}
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
