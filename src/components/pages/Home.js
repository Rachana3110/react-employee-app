import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/HomePage.css";

function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [empdata, setEmpData] = useState();
  const getToken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    return setEmpData(result.data);
  };

  let currentEmployee;
  if (empdata) {
    currentEmployee = empdata.filter((emp) => {
      return emp.id === getToken.id;
    });
  }

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  return (
    <div>
      <h2 className="home-header">
        Employee Management Application
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </h2>
      <div>
        {currentEmployee &&
          currentEmployee.map((employee) => {
            return (
              <div>
                id : {employee.id}
                <br />
                first_name: {employee.first_name}
                <br />
                designation : {employee.designation}
                <br />
              </div>
            );
          })}
        <Link to={`/edit/${getToken.id}`}>Edit</Link>
      </div>
    </div>
  );
}
export default HomePage;
