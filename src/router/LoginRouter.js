import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const RegistrationRouter = ({setToken}) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login setToken={setToken}/>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RegistrationRouter;
