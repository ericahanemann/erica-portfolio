import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import translations from "./translations.json";
import { TranslationContent } from "./types/translations";
import Contact from "./pages/Contact/Contact";

interface TranslationsContextType {
  translations: TranslationContent;
}

export const TranslationsContext = createContext<
  TranslationsContextType | undefined
>(undefined);

export const AppRoutes = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const userLang = navigator.language.toLowerCase();
    if (userLang.startsWith("pt")) {
      setLang("pt");
    } else if (userLang.startsWith("en")) {
      setLang("en");
    }
  }, []);

  const content: TranslationContent = translations[lang];

  return (
    <TranslationsContext.Provider value={{ translations: content }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TranslationsContext.Provider>
  );
};
