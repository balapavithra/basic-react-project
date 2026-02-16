import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page";
import { Task1 } from "./page/task-1";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task1 />} />
      </Routes>
    </BrowserRouter>
  );
};