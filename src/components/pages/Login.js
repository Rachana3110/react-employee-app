import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = ({ setToken, empdata }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    emp_id: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const empCheck = empdata.find(
      (emp) => emp.emp_id === values.emp_id && emp.password === values.password
    );
    if (!empCheck) {
      setError(true);
    } else {
      setError(false);
      setToken(empCheck);
      navigate("/profile");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
      <form className="login-form-container" onSubmit={handleLogin}>
        <h2 className="login-header">Login Page</h2>
        <label className="login-question-label">Employee Id</label>
        <input
          className="login-question-input"
          type="number"
          placeholder="Enter Employee Id..."
          name="emp_id"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="login-question-label">Password</label>
        <input
          className="login-question-input"
          type="password"
          placeholder="Enter Password..."
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />
        {error && (
          <div className="error-msg">
            <p>*Incorrect Employee Id or Password.</p>
          </div>
        )}
        <input className="submit-button" type="submit" value="Log-In" />
        <p>Dont have credentials, register before login</p>
        <Link to="/registration">
          <input className="register-button" type="button" value="Register" />
        </Link>
      </form>
  );
};

export default Login;
