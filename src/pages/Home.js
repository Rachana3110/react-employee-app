import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage({ setToken }) {
  const [empData, setEmpData] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      setEmpData(response.data);
    });
  }, []);

  let currEmployeeData;
  if (location && empData) {
    currEmployeeData = empData.filter((emp) => {
      return emp.Employee_ID_Number === location.state;
    });
  }

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };
  return (
    <div>
      {empData && (
        <form>
          <h2>Welcome to Home Page</h2>
          Employee_ID_Number : {currEmployeeData[0].Employee_ID_Number}
          <br />
          First_Name : {currEmployeeData[0].Employee_Details.First_Name}
          <br />
          Designation : {currEmployeeData[0].Employee_Details.Designation}
          <button onClick={handleLogout}>Logout</button>
        </form>
      )}
    </div>
  );
}
export default HomePage;
