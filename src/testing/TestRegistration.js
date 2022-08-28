import React, { useState } from "react";
import FormElement from "../components/FormElement";
import { RegisterConfig } from "../config/RegisterConfig";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../helpers/formContext";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    if (values.Password !== values.Re_Type_Password) {
      alert("password missmatch");
    } else {
      axios
        .post("http://localhost:3001/api/employeedata", values)
        .then((response) => {
          console.log(response.data);
        });
    }
    navigate("/testlogin");
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
            Back to Login{" "}
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
        {/* {error && <div className="error-msg">*{errorMsg}</div>} */}
        <input className="register-button" type="submit" value="Register" />
      </form>
    </FormContext.Provider>
  );
};

export default Registration;
