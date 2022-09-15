import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import FormInputs from "../helpers/FormInputs";

const EditProject = ({ empdata, handleProjectUpdate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState({
    project_name: "",
    company_name: "",
    project_status: "",
    company_phone: "",
    project_start_date: "",
    project_end_date: "",
  });
  const { emp_id } = project;

  const empId =
    empdata &&
    empdata.map((emp, i) => {
      return emp.id;
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
     {projectinputs.map((input, i) => {
        return (
          <FormInputs
            key={input.id}
            {...input}
            value={project[input.name]}
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
