import React, { useState, useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./Work.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

function Work() {
  const { content } = useContext(LangAndThemeContext);

  const renderedProjects = content.work.projects.map((project) => {
    return <ProjectItem key={project.projectName} project={project} />;
  });

  return (
    <div id="projects" className={css["projects-section"]}>
      <div className={css["projects-container"]}>
        <h3>{content.work.title}</h3>
        <div className={css["projects"]}>
          {renderedProjects}
        </div>
      </div>
    </div>
  );
}

export default Work;
