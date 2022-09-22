import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useToken from "../helpers/useToken";
import AddProject from "../pages/AddProject";
import EmployeeInfo from "../pages/EmployeeInfo";
import EditPage from "../pages/EditPage";
import EditProject from "../pages/EditProject";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import ProjectInformation from "../pages/ProjectInformation";
import Registration from "../pages/Registration";
import AddEmployee from "../pages/AddEmployee";
import SkillUpdate from "../pages/SkillUpdate";

const Routing = () => {
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const [empdata, setEmpData] = useState();
  const [projectdata, setProjectdata] = useState();
  useEffect(() => {
    loadEmployee();
    loadProject();
  }, []);

  let currentEmployee;
  if (empdata) {
    const getToken = JSON.parse(localStorage.getItem("token"));
    currentEmployee = empdata.filter((emp) => {
      return getToken && emp.id === getToken;
    });
  }

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    return setEmpData(result.data);
  };

  const handleRegister = async (event, employees) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/employees", employees);
    navigate("/");
    window.location.reload(true);
  };

  const handleUpdate = async (id, employee) => {
    await axios.put(`http://localhost:3001/employees/${id}`, employee);
    navigate("/profile");
    window.location.reload(true);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    await axios.delete(`http://localhost:3001/employees/${id}`);
    loadEmployee();
  };

  const loadProject = async () => {
    const result = await axios.get("http://localhost:3001/projects");
    return setProjectdata(result.data);
  };

  const handleAddProject = async (event, project) => {
    event.preventDefault();
    await axios.post(`http://localhost:3001/projects`, project);
    navigate("/projectinformation");
    window.location.reload(true);
  };

  const handleProjectUpdate = async (id, projectDetails) => {
    await axios.put(`http://localhost:3001/projects/${id}`, projectDetails);
    navigate("/projectinformation");
    window.location.reload(true);
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:3001/projects/${id}`);
    loadProject();
  };

  const handleEmployeeUpdate = async (id, employee) => {
    await axios.put(`http://localhost:3001/employees/${id}`, employee);
  };

  return (
    <Routes>
      {!token ? (
        <>
          <Route
            path="/"
            index
            element={<Login setToken={setToken} empdata={empdata} />}
          />
          <Route
            path="/registration"
            element={
              <Registration empdata={empdata} handleRegister={handleRegister} />
            }
          />
        </>
      ) : (
        <>
          <Route
            path="/"
            element={
              <Home setToken={setToken} currentEmployee={currentEmployee} />
            }
          >
            {empdata && (
              <>
                <Route
                  path="/profile"
                  element={<Profile currentEmployee={currentEmployee} />}
                />
                <Route
                  path="/edit/:id"
                  element={<EditPage handleUpdate={handleUpdate} />}
                />
                <Route
                  path="/add-project"
                  element={<AddProject handleAddProject={handleAddProject} />}
                />
                <Route
                  path="/editproject/:id"
                  element={
                    <EditProject handleProjectUpdate={handleProjectUpdate} />
                  }
                />
                <Route
                  path="/projectinformation"
                  element={
                    <ProjectInformation
                      currentEmployee={currentEmployee}
                      projectdata={projectdata}
                      deleteProject={deleteProject}
                      empdata={empdata}
                    />
                  }
                />
                <Route
                  path="/employeelist/:id"
                  element={
                    <EmployeeInfo
                      empdata={empdata}
                      handleDelete={handleDelete}
                    />
                  }
                />
                <Route
                  path="/addemployee-to-project/:id"
                  element={
                    <AddEmployee
                      empdata={empdata}
                      projectdata={projectdata}
                      handleEmployeeUpdate={handleEmployeeUpdate}
                      handleProjectUpdate={handleProjectUpdate}
                    />
                  }
                />
                <Route
                  path="/skillupdate/:id"
                  element={
                    <SkillUpdate
                      currentEmployee={currentEmployee}
                      handleEmployeeUpdate={handleEmployeeUpdate}
                    />
                  }
                />
              </>
            )}
          </Route>
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
