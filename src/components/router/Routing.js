import React from "react";
import { Route, Routes } from "react-router-dom";
import useToken from "../helpers/useToken";
import EditPage from "../pages/EditPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const Routing = () => {
  const { token, setToken } = useToken();

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/" index element={<Login setToken={setToken} />} />
          <Route path="/registration" element={<Registration />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home setToken={setToken} />} />
          <Route path="/edit" element={<EditPage />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
