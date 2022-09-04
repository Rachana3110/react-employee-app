import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterConfig } from "../config/RegisterConfig";
import { FormContext } from "../helpers/formContext";
import FormElement from "../elements/FormElement";

const EditPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const handleChange = (id, event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    navigate("/home");
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <h2 className="registration-header">
        <button className="back-button">
          <Link className="link" to="/home">
            Back to Home
          </Link>
        </button>
        Edit Page
      </h2>
      <form className="registration-form-container" onSubmit={handleUpdate}>
        {RegisterConfig.map((questions, i) => {
          return (
            <div key={i}>
              <label className="question-label">{questions.question}</label>
              <FormElement questions={questions} />
            </div>
          );
        })}
        <input className="register-button" type="submit" value="Update" />
      </form>
    </FormContext.Provider>
  );
};

export default EditPage;
