import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./css/HomePage.css";

function HomePage({ setToken, currentEmployee }) {
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

      {currentEmployee &&
        currentEmployee.map((emp, i) => {
          return (
            <div key={i} className="home-tabs">
              <Link className="home-link" to={`/profile`}>
                Profile
              </Link>
              {emp.designation === "Manager" && (
                <Link className="home-link" to={`/displayproject`}>
                  Display Project
                </Link>
              )}
              <Link className="home-link" to={`/employeelist`}>
                Employee List
              </Link>
            </div>
          );
        })}
      <Outlet />
    </>
  );
}
export default HomePage;
