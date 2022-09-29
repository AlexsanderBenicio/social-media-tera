import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginApp from "../pages/access/LoginApp";
import Dashboard from "../pages/dashboard";
import RegisterApp from "../pages/access/RegisterApp";
import Home from "../pages/home";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route exact path="/signup" element={<RegisterApp />} />
        <Route exact path="/login" element={<LoginApp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
