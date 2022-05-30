import App from "App";
import Header from "components/Header";
import RegisterForm from "features/Auth/components/RegisterForm";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import ClockFeature from "./features/Clock/index";
import NotFound from "./features/NotFound";
import TodoFeature from "./features/Todo/pages/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/clock/*" element={<ClockFeature />} />
        <Route path="/todo" element={<TodoFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
