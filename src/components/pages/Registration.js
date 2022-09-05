import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Registration.css";
import axios from "axios";

const TestRegistration = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const handleRegister = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/employees", values);
    navigate("/");
    window.location.reload(true);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2 className="registration-header">
        <button className="back-button">
          <Link className="link" to="/">
            Back to Login
          </Link>
        </button>
        Registration Page
      </h2>
      <form className="registration-form-container" onSubmit={handleRegister}>
        <label className="question-label">Employee Id</label>
        <input
          className="question-input"
          type="number"
          placeholder="Enter Employee Id"
          name="id"
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
        <input className="register-button" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default TestRegistration;
