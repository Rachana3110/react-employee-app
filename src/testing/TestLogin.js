import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { FormContext } from "../helpers/formContext";
import { Link, useNavigate } from "react-router-dom";
import { LoginConfig } from "../config/LoginConfig";
import axios from "axios";
import "../pages/css/Login.css";

const TestLogin = ({ setToken }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState();
  const [apiData, setApiData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      !apiData.map((emp) =>
        emp.Employee_ID_Number.includes(values.Employee_ID_Number)
      )
    ) {
      alert("Invalid Employee ID");
    } else if (
      !apiData.map((emp) =>
        emp.Employee_ID_Number.includes(values.Employee_ID_Number)
      )
    ) {
      alert("Invalid Password");
    } else {
      setToken("login successfull");
      navigate("/home");
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
        {/* {error && <div className="error-msg">*{errorMsg}</div>} */}
        <input className="submit-button" type="submit" value="Log-In" />
        <p>*Dont have credentials register before login</p>
        <Link to="/testregistration">
          <input className="register-button" type="button" value="Register" />
        </Link>
      </form>
    </FormContext.Provider>
  );
};

export default TestLogin;
