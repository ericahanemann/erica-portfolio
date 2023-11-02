import React, { useState, useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./Social.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Social() {
  const { theme, content } = useContext(LangAndThemeContext);

  return (
    <div className={css["social-section"]}>
      <h3>{content.social.info}</h3>
      <div className={`${css["social-icon-list"]} ${css[theme]}`}>
        <a href="https://github.com/ericahanemann" target="blank">
          <BsGithub className={css["social-icon"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/erica-hanemann/"
          target="blank"
        >
          <BsLinkedin className={css["social-icon"]} />
        </a>
      </div>
    </div>
  );
}

export default Social;
