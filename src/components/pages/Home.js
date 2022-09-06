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
    <>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <div className="home-tabs">
        <Link className="home-link" to={`/profile`}>
          Profile
        </Link>
        <Link className="home-link" to={`/displayproject`}>
          Display Project
        </Link>
        <Link className="home-link" to={`/employeelist`}>
          Employee List
        </Link>
      </div>
      <Outlet />
    </>
  );
}
export default HomePage;
