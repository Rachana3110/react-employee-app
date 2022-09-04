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
        <input
          type="number"
          placeholder="Enter Employee Id"
          name="id"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          onChange={(e) => handleChange(e)}
          required
        />
        <select
          type="dropdown"
          placeholder="Designation"
          name="designation"
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="">Select</option>
          <option value="developer">Developer</option>
          <option value="manager">Manager</option>
        </select>
        <input className="register-button" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default TestRegistration;
