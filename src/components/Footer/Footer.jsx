import React from "react";
import css from "./Footer.module.css"

function Footer({ content }) {
  return (
    <div className={css['footer-section']}>
      <div className={css['footer-container']}>
        <p>
          &copy; {new Date().getFullYear()} {content.footer.copyrightText}
        </p>
      </div>
    </div>
  );
}

export default Footer;
