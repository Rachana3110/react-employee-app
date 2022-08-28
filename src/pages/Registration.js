import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "../config/RegisterConfig";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../helpers/formContext";
import axios from "axios";
import "./css/Registration.css";

const TestRegistration = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState();
  const [values, setValues] = useState({
    Employee_ID_Number: "",
    Password: "",
    Re_Type_Password: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Date_of_Birth: "",
    Phone_Number: "",
    Address: "",
    Postal_Code: "",
    Qualification: "",
    Total_Experience: "",
    Start_Date_Date: "",
    End_Date_Date: "",
    Type_of_Employee: "",
    Designation: "",
    Gender: "",
    Marital_Status: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/api/employeedata").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    if (
      apiData.find(
        (emp) => emp.Employee_ID_Number === values.Employee_ID_Number
      )
    ) {
      setError(true);
      setErrorMsg("Employee Id already exist");
    } else if (values.Password !== values.Re_Type_Password) {
      setError(true);
      setErrorMsg("Re-type Password didn't match Password");
    } else {
      axios
        .post("http://localhost:3001/api/employeedata", values)
        .then((response) => {
          setApiData(response.data);
        });
      localStorage.setItem("empData", JSON.stringify(values));
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
