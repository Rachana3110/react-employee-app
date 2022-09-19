import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = ({
  empdata,
  projectdata,
  handleUpdate,
  handleProjectUpdate,
}) => {
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
  return <div>{id}</div>;
};

export default AddEmployee;
