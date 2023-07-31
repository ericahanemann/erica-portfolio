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
  SiBootstrap,
} from "react-icons/si";

function Skills() {
  const { theme, content } = useContext(LangAndThemeContext);

  return (
    <div id="skills" className={css["skills-section"]}>
      <div className={css["skills-container"]}>
        <h3>{content.skills.skillsTitle}</h3>
        <ul className={`${css["skills-list"]} ${css[theme]}`}>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="blank"
            >
              <SiHtml5 />
              <div>HTML5</div>
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="blank"
            >
              <SiCss3 />
              <div>CSS3</div>
            </a>
          </li>
          <li>
            <a href="https://github.com/css-modules/css-modules" target="blank">
              <SiCssmodules />
              <div>CSS Modules</div>
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/installation" target="blank">
              <SiTailwindcss />
              <div>Tailwind Css</div>
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              target="blank"
            >
              <SiBootstrap />
              <div>Bootstrap</div>
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="blank"
            >
              <SiJavascript />
              <div>Javascript</div>
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/docs/" target="blank">
              <SiTypescript />
              <div>Typescript</div>
            </a>
          </li>
          <li>
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              target="blank"
            >
              <SiReact />
              <div>React</div>
            </a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="blank">
              <SiRedux />
              <div>Redux</div>
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/doc" target="blank">
              <SiGit />
              <div>Git</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
