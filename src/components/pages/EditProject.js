import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectinputs from "../data/projectinputs";
import FormInputs from "../helpers/FormInputs";

const EditProject = ({ handleProjectUpdate }) => {
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

  return (
    <form
      className="edit-form-container"
      onSubmit={(e) => {
        e.preventDefault();
        handleProjectUpdate(id, project);
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
      <input className="add-project-button" type="submit" value="Update" />
      <input
        className="edit-back-button"
        type="button"
        value="Back"
        onClick={() => navigate("/projectinformation")}
      />
    </form>
  );
};

export default EditProject;
