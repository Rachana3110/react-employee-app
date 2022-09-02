import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";
import Tabs from "../components/TabComponent/Tabs";

function HomePage({ setToken }) {
  const navigate = useNavigate();

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
      <Tabs />
    </div>
  );
}
export default HomePage;
