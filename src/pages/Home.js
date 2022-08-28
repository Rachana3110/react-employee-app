import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";

function HomePage({ setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      console.log(response.data);
    });
  }, []);

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };
  return (
    <div>
      <h2 className="home-header">
        Employee Application
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </h2>
    </div>
  );
}
export default HomePage;
