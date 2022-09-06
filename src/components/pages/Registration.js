import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Registration.css";

const TestRegistration = ({ handleRegister }) => {
  const [employees, setEmployees] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    setEmployees({ ...employees, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        className="registration-form-container"
        onSubmit={(event) => handleRegister(event, employees)}
      >
        <h2 className="registration-header">Add Employee</h2>
        <label className="question-label">Employee Id</label>
        <input
          className="question-input"
          type="number"
          placeholder="Enter Employee Id"
          name="emp_id"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="question-label">Password</label>
        <input
          className="question-input"
          type="text"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="question-label">First Name</label>
        <input
          className="question-input"
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="question-label">Designation</label>
        <select
          className="question-input"
          type="dropdown"
          placeholder="Designation"
          name="designation"
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
        </select>
        <input className="register-button" type="submit" value="Add" />
        <button className="back-button">
          <Link className="link" to="/">
            Back to Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default TestRegistration;
