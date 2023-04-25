import React, { useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./Footer.module.css";

function Footer() {
  const { content } = useContext(LangAndThemeContext);

  return (
    <div className={css["footer-section"]}>
      <div className={css["footer-container"]}>
        <p>
          &copy; {new Date().getFullYear()} {content.footer.copyrightText}
        </p>
      </div>
    </div>
  );
}

export default Footer;
