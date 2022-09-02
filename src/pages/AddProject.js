import React, { useState } from "react";
import { ProjectConfig } from "../config/ProjectConfig";
import { FormContext } from "../helpers/formContext";
import FormElement from "../components/FormElement";

const AddProject = () => {
  const [values, setValues] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <form className="project-form-container" onSubmit={handleRegister}>
        {ProjectConfig.map((questions, i) => {
          return (
            <div key={i}>
              <label>{questions.question}</label>
              <FormElement questions={questions} />
            </div>
          );
        })}
        <input className="register-button" type="submit" value="Add Project" />
      </form>
    </FormContext.Provider>
  );
};

export default AddProject;
