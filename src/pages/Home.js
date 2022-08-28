import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";
// import { RegisterConfig } from "../config/RegisterConfig";
import Tabs from "../components/TabComponent/Tabs";

function HomePage({ setToken }) {
  const [apiData, setApiData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  if (apiData) {
    //
  }

  return (
    <div>
      <h2 className="home-header">
        Employee Management Application
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </h2>
      <Tabs />
    </div>
  );
}
export default HomePage;
