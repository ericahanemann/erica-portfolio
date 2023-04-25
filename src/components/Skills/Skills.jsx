import React, { useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./Skills.module.css";
import {
  SiHtml5,
  SiCss3,
  SiCssmodules,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiGit,
} from "react-icons/si";

function Skills() {
  const { content } = useContext(LangAndThemeContext);

  return (
    <div id="skills" className={css["skills-section"]}>
      <div className={css["skills-container"]}>
        <h3>{content.skills.skillsTitle}</h3>
        <ul className={css["skills-list"]}>
          <li>
            <SiHtml5 />
            <div>HTML5</div>
          </li>
          <li>
            <SiCss3 />
            <div>CSS3</div>
          </li>
          <li>
            <SiCssmodules />
            <div>CSS Modules</div>
          </li>
          <li>
            <SiTailwindcss />
            <div>Tailwind Css</div>
          </li>
          <li>
            <SiJavascript />
            <div>Javascript</div>
          </li>
          <li>
            <SiTypescript />
            <div>Typescript</div>
          </li>
          <li>
            <SiReact />
            <div>React</div>
          </li>
          <li>
            <SiRedux />
            <div>Redux</div>
          </li>
          <li>
            <SiGit />
            <div>Git</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
