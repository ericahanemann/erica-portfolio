import React, { useState, useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./Work.module.css";

function Work() {
  const { content } = useContext(LangAndThemeContext);

  return (
    <div id="projects" className={css["projects-section"]}>
      <div className={css["projects-container"]}>
        <h3>{content.work.title}</h3>
        <div className={css["projects"]}>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
