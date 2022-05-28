import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import App from "./App";

import ClockFeature from "./features/Clock/index";
import ClockHomePage from "./features/Clock/page/ClockHomePage";
import ClockPage from "./features/Clock/page/ClockPage";
import NotFound from "./features/NotFound";
import TodoFeature from "./features/Todo/pages/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <p>
        <Link to="/todo">Todo</Link>
      </p>

      <NavLink to="/clock">Clock</NavLink>

      <Routes>
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/clock/*" element={<ClockFeature />} />
        <Route path="/todo" element={<TodoFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
