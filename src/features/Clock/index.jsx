import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import ClockHomePage from "./page/ClockHomePage";
import ClockPage from "./page/ClockPage";

function ClockFeature(props) {
  return (
    <Routes>
      <Route path="/" element={<ClockHomePage />} />
      <Route path=":clockId/*" element={<ClockPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ClockFeature;
