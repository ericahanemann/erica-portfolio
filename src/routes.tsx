import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar/Navbar";

import translations from "./translations.json";
import { TranslationContent } from "./types/translations";

export const AppRoutes = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  useEffect(() => {
    if (navigator.language.toLowerCase().startsWith("pt")) {
      setLang("pt");
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  const content: TranslationContent = translations[lang];
  return (
    <BrowserRouter>
      <Navbar content={content} />
      <Routes>
        <Route path="/" element={<Home content={content} />} />
        <Route path="/project" element={<Project content={content} />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
