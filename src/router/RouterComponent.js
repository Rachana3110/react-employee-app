import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RouterComponent;
