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

  useEffect(() => {
    const loadProject = async () => {
      const result = await axios.get(`http://localhost:3001/projects/${id}`);
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
    if (employeeId) {
      let filterEmployee = empdata.filter((employee, i) => {
        return employee.id === parseInt(employeeId);
      });
      filterEmployee[0].project.push(project.project_name);
      setInterval(handleEmployeeUpdate(employeeId, filterEmployee[0]), 1000);
    }

    if (project) {
      setInterval(handleProjectUpdate(id, project), 2000);
    }
  };
  console.log(project);
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
            value={project && project.project_name}
          />
          <select name="emp_id" onChange={handleAddEmployee} required>
            <option value="">Select Employee</option>
            {empdata.map((employee, i) => {
              return (
                <>
                  {employee.designation !== "Manager" && (
                    <option key={i}>{employee.id}</option>
                  )}
                </>
              );
            })}
          </select>
          <input type="submit" value="Add Employee" />
          <button onClick={() => navigate("/projectinformation")}>Back</button>
          <div>
            <h3>List of Employees in {project.project_name} project</h3>
            {project.emp_id.map((employeeId, i) => {
              return (
                <ul>
                  <li>{employeeId}</li>
                </ul>
              );
            })}
          </div>
        </form>
      )}
    </div>
  );
};

export default AddEmployee;
