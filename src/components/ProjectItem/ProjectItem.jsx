import { useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./ProjectItem.module.css";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectItem({ project }) {
  const { theme } = useContext(LangAndThemeContext);
  const renderedTechnologies = project.technologies.map((tech) => {
    return (
      <div key={tech} className={`${css["tech-item"]} ${css[theme]}`}>
        {tech}
      </div>
    );
  });
  const projectImgSrc = `src/assets/${project.projectName}-screenshot.png`;

  return (
    <div className={css["project"]}>
      <h4>{project.projectName}</h4>
      <div className={css["project-img-container"]}>
        <img src={projectImgSrc} />
        <a href={project.liveDemoUrl} target="blank">
          <div className={css["project-overlay"]}>
            <div className={css["link-item"]}>
              Live demo
              <BsBoxArrowUpRight />
            </div>
          </div>
        </a>
      </div>
      <div className={css["project-info"]}>
        <p>{project.projectDescription}</p>
        <div>{renderedTechnologies}</div>

        <div className={css["project-links"]}>
          <div className={css["link-item"]}>
            <a href={project.liveDemoUrl} target="blank">
              <div>Live demo</div>
              <BsBoxArrowUpRight />
            </a>
          </div>

          <div className={css["link-item"]}>
            <a href={project.codeUrl} target="blank">
              <div>Code</div>
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
