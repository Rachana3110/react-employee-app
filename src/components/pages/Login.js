import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import axios from "axios";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [empData, setEmpData] = useState();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    setEmpData(result.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const empCheck = empData.find(
      (emp) => emp.id === values.id && emp.password === values.password
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
    <div>
      <h2 className="login-header">Login Page</h2>
      <form className="login-form-container" onSubmit={handleLogin}>
        <label className="login-question-label">Employee Id</label>
        <input
          className="login-question-input"
          type="number"
          placeholder="Enter Employee Id..."
          name="id"
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
    </div>
  );
};

export default Login;
