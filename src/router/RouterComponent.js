import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Content from "../pages/Content";

const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<Content />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RouterComponent;
