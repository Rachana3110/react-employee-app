import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import "./css/AddProject.css";

const AddProject = ({ empdata, handleAddProject }) => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    emp_id: [],
    project_name: "",
  });

  const empId =
    empdata &&
    empdata.map((emp, i) => {
      return emp.emp_id;
    });
  const { emp_id, project_name } = project;

  const handleChange = (event) => {
    event.preventDefault();
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleMultiSelect = (event) => {
    setProject({ ...project, emp_id: event });
  };

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
      <label className="edit-label">Project Name</label>
      <input
        className="edit-value"
        type="text"
        placeholder="Enter Project Name"
        name="project_name"
        value={project_name}
        onChange={(e) => handleChange(e)}
        required
      />
      <label className="edit-label">Employee Id</label>
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
