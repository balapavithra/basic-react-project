import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page";
import Task1 from "./page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
