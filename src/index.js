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
import { SnackbarProvider } from "notistack";
import ProductFeature from "features/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<div>HOME PAGE</div>} />
            <Route path="/clock/*" element={<ClockFeature />} />
            <Route path="/todo" element={<TodoFeature />} />
            <Route path="/counter" element={<CounterFeature />} />
            <Route path="/products" element={<ProductFeature />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
