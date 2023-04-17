import css from "./LanguageSelector.module.css";

function LanguageSelector({ onSelect, lang, theme }) {
  const selectLang = (langSelected) => {
    if (lang !== langSelected) {
      onSelect();
    }
  };

  return (
    <div className={`${css["language-options"]} ${css[theme]}`}>
      <div
        onClick={() => selectLang("pt")}
        className={`${css["lang-button"]} ${css[lang == "pt" ? "active" : ""]}`}
      >
        PT
      </div>
      <div
        onClick={() => selectLang("en")}
        className={`${css["lang-button"]} ${css[lang == "en" ? "active" : ""]}`}
      >
        EN
      </div>
    </div>
  );
}

export default LanguageSelector;
