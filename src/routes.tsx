import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        
        <Route path="/logo" element={<Logo />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
