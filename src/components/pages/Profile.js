import React from "react";
import { Link } from "react-router-dom";
import inputs from "../data/inputs";
import "./css/Profile.css";

const Profile = ({ currentEmployee }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Profile</h2>
      {currentEmployee &&
        currentEmployee.map((employee) => {
          return (
            <div className="profile-container">
              <div className="profile-cards">
                <label className="profile-label">Employee Id</label>
                <p className="profile-value">{employee.id}</p>
                {inputs.map((input, i) => {
                  return (
                    <React.Fragment key={i}>
                      {input.label !== "Password" &&
                        employee[input.name] !== "" && (
                          <>
                            <label className="profile-label">
                              {input.label}
                            </label>
                            <p className="profile-value">
                              {employee[input.name]}
                            </p>
                          </>
                        )}
                    </React.Fragment>
                  );
                })}
                <Link className="edit-link" to={`/edit/${employee.id}`}>
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Profile;
