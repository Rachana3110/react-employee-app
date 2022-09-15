import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import "./css/AddProject.css";
import projectinputs from "../data/projectinputs";
import FormInputs from "../helpers/FormInputs";

const AddProject = ({ empdata, handleAddProject }) => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    project_name: "",
    company_name: "",
    project_status: "",
    company_phone: "",
    project_start_date: "",
    project_end_date: "",
  });

  const empId =
    empdata &&
    empdata.map((emp, i) => {
      return emp.id;
    });

  const handleChange = (event) => {
    event.preventDefault();
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleMultiSelect = (event) => {
    setProject({ ...project, emp_id: event });
  };
  const { emp_id } = project;
  return (
    <form
      className="edit-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        emp_id.length
          ? handleAddProject(event, project)
          : alert("Fill all values");
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
      <label className="multiselect-label">Employee Id</label>
      <Multiselect
        className="multiselect-value"
        isObject={false}
        name="emp_id"
        options={empId}
        onSelect={(e) => handleMultiSelect(e)}
        showCheckbox
      ></Multiselect>
      <input className="add-project-button" type="submit" value="Add" />
      <input
        className="edit-back-button"
        type="button"
        value="Back"
        onClick={() => navigate("/displayproject")}
      />
    </form>
  );
};

export default AddProject;
