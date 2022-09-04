import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterConfig } from "../config/RegisterConfig";
import "./css/HomePage.css";

function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [empData, setEmpData] = useState();

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setEmpData(result.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const getCurrEmployee =
    empData &&
    empData.filter((emp) => {
      const getToken = JSON.parse(localStorage.getItem("token"));
      return emp.id === getToken.id;
    });

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  const handleEdit = () => {
    navigate("/edit");
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
        {RegisterConfig.map((emp) => {
          return (
            <>
              {getCurrEmployee &&
                getCurrEmployee.map((employee, i) => {
                  return (
                    <div key={i}>
                      {emp.question} : {employee[emp.questionname]}
                    </div>
                  );
                })}
            </>
          );
        })}
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}
export default HomePage;
