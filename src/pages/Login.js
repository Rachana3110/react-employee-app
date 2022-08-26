import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { Link, useNavigate } from "react-router-dom";
import { LoginConfig } from "../config/LoginConfig";
import axios from "axios";
import "./css/Login.css";

const Registration = ({ setToken }) => {
  const [configData, setConfigData] = useState();
  const [registerData, setRegisterData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/register").then((response) => {
      setRegisterData(response.data);
    });
    setConfigData(LoginConfig);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      registerData &&
      !registerData
        .map((p) => p.Employee_ID_Number)
        .includes(configData[0].Employee_ID_Number)
    ) {
      alert("Enter valid Employee ID");
    } else if (
      !registerData.map((p) => p.Password).includes(configData[1].Password)
    ) {
      alert("Enter valid Password");
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
        question[question.questionname] = event.target.value;
        setConfigData(newData);
      }
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>
        {LoginConfig.map((questions) => {
          return (
            <div>
              <p>{questions.question}</p>
              <FormElement questions={questions} />
            </div>
          );
        })}
        <input type="submit" value="Submit" />
        <p>*Dont have credentials register before login</p>
        <Link className="Register-button" to="/registration">
          <input type="button" value="Register" />
        </Link>
      </form>
    </FormContext.Provider>
  );
};

export default Registration;
