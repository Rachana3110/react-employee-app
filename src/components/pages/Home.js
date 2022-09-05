import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./css/HomePage.css";

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
      <Link to={`/profile`}>Profile</Link> {"  "}
      <Link to={`/employeelist`}>Employee List</Link>
      <Outlet />
    </div>
  );
}
export default HomePage;
