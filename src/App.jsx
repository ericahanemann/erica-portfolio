import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import ContactForm from "./components/ContactForm/ContactForm";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import translations from "./translations.json";
import css from "./App.module.css";

export const LangAndThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("pt");

  const content = translations[lang];

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else if (window.matchMedia("prefers-color-scheme: light").matches) {
      setTheme("light");
    }

    if (navigator.language.toLowerCase().startsWith("pt")) {
      setLang("pt");
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLangSelect = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  return (
    <LangAndThemeContext.Provider value={{ theme, content }}>
      <div id={css["app-container"]} className={css[theme]}>
        <header>
          <Header
            onThemeSwitch={handleThemeSwitch}
          />
        </header>

        <section>
          <About />
          <LanguageSelector
            onSelect={handleLangSelect}
            lang={lang}
          />
        </section>

        <section>
          <Work />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <ContactForm />
        </section>
      </div>
    </LangAndThemeContext.Provider>
  );
}

export default App;
