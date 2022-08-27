import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";
import { RegisterConfig } from "../config/RegisterConfig";

function HomePage({ setToken }) {
  // const [loginData, setLoginData] = useState();
  const [configData, setConfigData] = useState();
  const [empData, setEmpData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      setEmpData(response.data);
    });
    setConfigData(RegisterConfig);
    // axios.get("http://localhost:3001/api/login").then((response) => {
    //   setLoginData(response.data);
    // });
  }, []);

  // let currEmployeeData;
  // if (loginData && empData) {
  //   currEmployeeData = empData.filter((emp) => {
  //     return emp.Employee_ID_Number === loginData[0].Employee_ID_Number;
  //   });
  // }

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  if (empData) {
    console.log(configData)
    console.log(empData);
  }

  return (
    <div>
      <h2 className="home-header">
        Employee Application
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </h2>

      {/* {loginData && empData && (
        <form>
          <h2>Welcome to Home Page</h2>
          Employee_ID_Number : {currEmployeeData[0].Employee_ID_Number}
          <br />
          First_Name : {currEmployeeData[0].Employee_Details.First_Name}
          <br />
          Designation : {currEmployeeData[0].Employee_Details.Designation}
          <button onClick={handleLogout}>Logout</button>
        </form>
      )} */}
    </div>
  );
}
export default HomePage;
