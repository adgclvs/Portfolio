import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./pages/Allprojects";
import Home from "./pages/Home";
import Mylife from "./pages/Mylife";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-life" element={<Mylife />} />
        <Route path="/my-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
