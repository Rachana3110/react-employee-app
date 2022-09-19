import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = ({ setToken, empdata }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const empCheck = empdata.find(
      (emp) => emp.email === values.email && emp.password === values.password
    );
    if (!empCheck) {
      setError(true);
    } else {
      setError(false);
      setToken(empCheck);
      navigate("/projectinformation");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <form className="login-form-container" onSubmit={handleLogin}>
      <h2 className="login-header">Login Page</h2>
      <label className="login-question-label">Email</label>
      <input
        className="login-question-input"
        type="email"
        placeholder="Enter Email..."
        name="email"
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
