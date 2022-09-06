import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import "./css/AddProject.css";

const AddProject = ({ empdata, handleAddProject }) => {
  const navigate = useNavigate();
  const empId =
    empdata &&
    empdata.map((emp, i) => {
      return emp.emp_id;
    });
  const [selection, setSelection] = useState(false);

  const [project, setProject] = useState({
    p_id: "",
    project_name: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleMultiSelect = (event) => {
    setSelection(true);
    setProject({ ...project, emp_id: event });
  };

  return (
    <div>
      <form
        className="edit-form-container"
        onSubmit={(event) => {
          selection
            ? handleAddProject(event, project)
            : alert("Fill all values");
        }}
      >
        <label className="edit-label">Project Id </label>
        <input
          className="edit-value"
          type="number"
          placeholder="Enter Project Id"
          name="p_id"
          onChange={(e) => handleChange(e)}
          required
        />
        <label className="edit-label">Project Name</label>
        <input
          className="edit-value"
          type="text"
          placeholder="Enter Project Name"
          name="project_name"
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
    </div>
  );
};

export default AddProject;
