import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { Link, useNavigate } from "react-router-dom";
import { LoginConfig } from "../config/LoginConfig";
import axios from "axios";
import "./css/Login.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [configData, setConfigData] = useState(LoginConfig);
  const [apiData, setApiData] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const formId = configData[0].questionvalue;
    const configId = apiData
      .map((p) => p.Employee_Data[0])
      .map((p) => p.questionvalue);

    const formPwd = configData[1].questionvalue;
    const configPwd = apiData
      .map((p) => p.Employee_Data[1])
      .map((p) => p.questionvalue);

    if (!configId.includes(formId)) {
      setError(true);
      setErrorMsg("Enter valid Employee ID");
    } else if (!configPwd.includes(formPwd)) {
      setError(true);
      setErrorMsg("Enter valid Password");
    } else {
      setToken("Login Successfull");
      navigate("/home");
    }
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    const newData = [...configData];
    newData.forEach((question) => {
      const { questionid } = question;
      if (id === questionid) {
        question["questionvalue"] = event.target.value;
        setConfigData(newData);
      }
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <h2 className="login-header">Login Page</h2>
      <form className="login-form-container" onSubmit={handleLogin}>
        {configData.map((questions, i) => {
          return (
            <div key={i}>
              <label className="login-question-label">
                {questions.question}
              </label>
              <FormElement questions={questions} />
            </div>
          );
        })}
        {error && <div className="error-msg">*{errorMsg}</div>}
        <input className="submit-button" type="submit" value="Log-In" />
        <p>*Dont have credentials register before login</p>
        <Link to="/registration">
          <input className="register-button" type="button" value="Register" />
        </Link>
      </form>
    </FormContext.Provider>
  );
};

export default Login;
