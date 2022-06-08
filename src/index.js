import store from "app/store";
import Header from "components/Header";
import CounterFeature from "features/Counter";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClockFeature from "./features/Clock/index";
import NotFound from "./features/NotFound";
import TodoFeature from "./features/Todo/pages/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>HOME PAGE</div>} />
          <Route path="/clock/*" element={<ClockFeature />} />
          <Route path="/todo" element={<TodoFeature />} />
          <Route path="/counter" element={<CounterFeature />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
