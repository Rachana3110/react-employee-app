import React, { useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { Link, useNavigate } from "react-router-dom";
import { LoginConfig } from "../config/LoginConfig";
import "./css/Login.css";
import empData from "../data/empdata";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState();
  const [error, setError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const empCheck = empData.find(
      (emp) =>
        emp.Employee_ID_Number === values.Employee_ID_Number &&
        emp.Password === values.Password
    );
    if (empCheck) {
      setToken(empCheck);
      navigate("/home");
    } else {
      setError(true);
    }
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <h2 className="login-header">Login Page</h2>
      <form className="login-form-container" onSubmit={handleLogin}>
        {LoginConfig.map((questions, i) => {
          return (
            <div key={i}>
              <label className="login-question-label">
                {questions.question}
              </label>
              <FormElement questions={questions} />
            </div>
          );
        })}
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
    </FormContext.Provider>
  );
};

export default Login;
