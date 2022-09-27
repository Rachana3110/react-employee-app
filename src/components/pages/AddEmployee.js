import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = ({
  empdata,
  projectdata,
  handleEmployeeUpdate,
  handleProjectUpdate,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employeeId, setEmployeeId] = useState();
  const [project, setProject] = useState({
    project_name: "",
    company_name: "",
    project_status: "",
    company_phone: "",
    project_start_date: "",
    project_end_date: "",
    emp_id: [],
  });

  let existingEmpId = [];
  let employeeList = [];
  if (projectdata) {
    projectdata.map((p) => {
      return existingEmpId.push(...p.emp_id);
    });

    const filterEmpData = empdata.filter((data) => {
      return data.designation !== "Manager";
    });

    const getIds = filterEmpData.map((data) => {
      return data.id;
    });
    employeeList = getIds.filter(
      (x) => !existingEmpId.map((id) => parseInt(id)).includes(x)
    );
  }

  useEffect(() => {
    const loadProject = async () => {
      const result = await axios.get(`http://localhost:3002/projects/${id}`);
      setProject(result.data);
    };
    loadProject();
  }, [id]);

  const handleAddEmployee = (event) => {
    if (project.emp_id.includes(event.target.value)) {
      alert("Employee already in the project");
    } else {
      project.emp_id.push(event.target.value);
      setProject({ ...project });
      setEmployeeId(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    let filterEmployee = empdata.filter((employee, i) => {
      return employee.id === parseInt(employeeId);
    })[0];
    handleEmployeeUpdate(employeeId, {
      ...filterEmployee,
      current_project: project.project_name,
    });
    handleProjectUpdate(id, project);
  };
  return (
    <div>
      {project && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            name="project_name"
            defaultValue={project && project.project_name}
          />
          <select name="emp_id" onChange={handleAddEmployee} required>
            <option value="">Select Employee</option>
            {employeeList &&
              employeeList.map((id, i) => {
                return (
                  <option value={id} key={i}>
                    {id}
                  </option>
                );
              })}
          </select>
          <input
            className="add-employee-button"
            type="submit"
            value="Add Employee"
          />
          <button onClick={() => navigate("/projectinformation")}>Back</button>
        </form>
      )}
    </div>
  );
};

export default AddEmployee;
