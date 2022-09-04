import React, { useState } from "react";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "../config/RegisterConfig";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../helpers/formContext";
import "./css/Registration.css";
import axios from "axios";

const TestRegistration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [values, setValues] = useState();

  const handleRegister = async (event) => {
    event.preventDefault();
    const { emp_id, password, first_name, designation, re_type_password } =
      values;

    if (password !== re_type_password) {
      setError(true);
      setErrorMsg("Re-type Password didn't match Password");
    } else {
      setError(false);
      await axios.post("http://localhost:3001/employees", {
        id: emp_id,
        password: password,
        first_name: first_name,
        designation: designation,
      });
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
