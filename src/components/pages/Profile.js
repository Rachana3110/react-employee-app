import React from "react";
import { Link } from "react-router-dom";
import "./css/Profile.css";

const Profile = ({ currentEmployee }) => {
  return (
    <>
      {currentEmployee &&
        currentEmployee.map((employee) => {
          return (
            <div className="profile-container">
              <label className="profile-label">Employee Id</label>
              <p className="profile-value">{employee.emp_id}</p>
              <label className="profile-label">First Name</label>
              <p className="profile-value">{employee.first_name}</p>
              <label className="profile-label">Designation</label>
              <p className="profile-value">{employee.designation}</p>
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
