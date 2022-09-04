import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllEmployees from "./AllEmployees";
import "./css/HomePage.css";
import Profile from "./Profile";

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

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/employees/${id}`);
    loadEmployee();
  };

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
        {currentEmployee &&
          currentEmployee.map((employee, i) => {
            return (
              <>
                <Profile key={i} {...employee} />
                <Link to={`/edit/${employee.id}`}>Edit</Link>
              </>
            );
          })}
        {empdata && (
          <AllEmployees empdata={empdata} handleDelete={handleDelete} />
        )}
    </div>
  );
}
export default HomePage;
