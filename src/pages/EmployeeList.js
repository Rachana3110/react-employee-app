import axios from "axios";
import React, { useEffect, useState } from "react";
import { RegisterConfig } from "../config/RegisterConfig";

const EmployeeList = () => {
  const [employeelist, setEmployeelist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      setEmployeelist(response.data);
    });
  }, []);
  console.log(
    employeelist.map((list) => {
      return list.Address;
    })
  );
  return (
    <div>
      {employeelist.map((list) => {
        return (
          <div style={{ borderStyle: "solid", margin: "5%" }}>
            {RegisterConfig.map((configdata) => {
              return (
                <div>
                  {configdata.questionname} : {list[configdata.questionname]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
