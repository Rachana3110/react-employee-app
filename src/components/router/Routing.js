import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useToken from "../helpers/useToken";
import AllEmployees from "../pages/AllEmployees";
import EditPage from "../pages/EditPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";

const Routing = () => {
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const [empdata, setEmpData] = useState();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:3001/employees");
    return setEmpData(result.data);
  };

  const handleUpdate = async (id, employee) => {
    await axios.put(`http://localhost:3001/employees/${id}`, employee);
    navigate("/")
    window.location.reload(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/employees/${id}`);
    loadEmployee();
  };

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/" index element={<Login setToken={setToken} />} />
          <Route path="/registration" element={<Registration />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home setToken={setToken} />}>
            {empdata && (
              <>
                <Route
                  path="/profile"
                  element={<Profile empdata={empdata} />}
                />
                <Route
                  path="/edit/:id"
                  element={<EditPage handleUpdate={handleUpdate} />}
                />
                <Route
                  path="/employeelist"
                  element={
                    <AllEmployees
                      empdata={empdata}
                      handleDelete={handleDelete}
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
