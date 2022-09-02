import React, { useState } from "react";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "../config/RegisterConfig";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../helpers/formContext";
import "./css/Registration.css";
import empData from "../data/empdata";

const TestRegistration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [employeeData, setEmployeeData] = useState(empData);
  const [errorMsg, setErrorMsg] = useState();
  const [values, setValues] = useState({
    Employee_ID_Number: null,
    Password: null,
    Re_Type_Password: null,
    First_Name: null,
    Middle_Name: null,
    Last_Name: null,
    Date_of_Birth: null,
    Phone_Number: null,
    Address: null,
    Postal_Code: null,
    Qualification: null,
    Total_Experience: null,
    Start_Date_Date: null,
    End_Date_Date: null,
    Type_of_Employee: null,
    Designation: null,
    Gender: null,
    Marital_Status: null,
  });

  const handleRegister = (event) => {
    event.preventDefault();
    if (
      employeeData.find(
        (emp) => emp.Employee_ID_Number === values.Employee_ID_Number
      )
    ) {
      setError(true);
      setErrorMsg("Employee Id already exist");
    } else if (values.Password !== values.Re_Type_Password) {
      setError(true);
      setErrorMsg("Re-type Password didn't match Password");
    } else {
      employeeData.push(values);
      setEmployeeData(employeeData);
      localStorage.setItem("empData", JSON.stringify(employeeData));
      navigate("/");
    }
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <h2 className="registration-header">
        <button className="back-button">
          <Link className="link" to="/">
            Back to Login
          </Link>
        </button>
        Registration Page
      </h2>
      <form className="registration-form-container" onSubmit={handleRegister}>
        {RegisterConfig.map((questions, i) => {
          return (
            <div key={i}>
              <label className="question-label">{questions.question}</label>
              <FormElement questions={questions} />
            </div>
          );
        })}
        {error && (
          <div className="error-msg">
            <p>*{errorMsg}</p>
          </div>
        )}
        <input className="register-button" type="submit" value="Register" />
      </form>
    </FormContext.Provider>
  );
};

export default TestRegistration;
