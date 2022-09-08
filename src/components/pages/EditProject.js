import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = ({ empdata, handleProjectUpdate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState({
    project_name: "",
  });
  const { emp_id, project_name } = project;

  const empId =
    empdata &&
    empdata.map((emp, i) => {
      return emp.emp_id;
    });

  useEffect(() => {
    const loadProject = async () => {
      const result = await axios.get(`http://localhost:3001/projects/${id}`);
      setProject(result.data);
    };
    loadProject();
  }, [id]);

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
      onSubmit={(e) => {
        e.preventDefault();
        emp_id.length !== 0
          ? handleProjectUpdate(id, project)
          : alert("fill all values");
      }}
    >
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
        selectedValues={emp_id}
        options={empId}
        onSelect={handleMultiSelect}
        onRemove={handleMultiSelect}
        showCheckbox
      ></Multiselect>
      <input className="add-project-button" type="submit" value="Update" />
      <input
        className="edit-back-button"
        type="button"
        value="Back"
        onClick={() => navigate("/displayproject")}
      />
    </form>
  );
};

export default EditProject;
