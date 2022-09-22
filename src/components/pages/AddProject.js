import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AddProject.css";
import projectinputs from "../data/projectinputs";
import FormInputs from "../helpers/FormInputs";

const AddProject = ({ handleAddProject }) => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    project_name: "",
    company_name: "",
    project_status: "",
    company_phone: "",
    project_start_date: "",
    project_end_date: "",
    emp_id: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  return (
    <form
      className="edit-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddProject(event, project);
      }}
    >
      <h2 className="registration-header">Add Project</h2>
      {projectinputs.map((input, i) => {
        return (
          <FormInputs
            key={input.id}
            {...input}
            option={input.options}
            type={input.type}
            onChange={handleChange}
          />
        );
      })}
      <input className="add-project-button" type="submit" value="Add" />
      <input
        className="edit-back-button"
        type="button"
        value="Back"
        onClick={() => navigate("/projectinformation")}
      />
    </form>
  );
};

export default AddProject;
