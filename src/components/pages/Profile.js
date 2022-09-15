import React from "react";
import { Link } from "react-router-dom";
import inputs from "../data/inputs";
import "./css/Profile.css";

const Profile = ({ currentEmployee }) => {
  return (
    <>
      {currentEmployee &&
        currentEmployee.map((employee) => {
          return (
            <div className="profile-container">
              {inputs.map((input, i) => {
                return (
                  <div className="profile-cards" key={i}>
                    {input.label !== "Password" && employee[input.name] !== "" && (
                      <>
                        <label className="profile-label">{input.label}</label>
                        <p className="profile-value">{employee[input.name]}</p>
                      </>
                    )}
                  </div>
                );
              })}
              <Link className="edit-link" to={`/edit/${employee.id}`}>
                Edit
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Profile;
