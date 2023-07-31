import { useContext } from "react";
import { LangAndThemeContext } from "../../App";
import css from "./ProjectItemSkeleton.module.css";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

function ProjectItemSkeleton({ project }) {
  const { theme, content } = useContext(LangAndThemeContext);

  return (
    <div className={css["project"]}>
      <h4>{content.work.comingSoon}</h4>
      <div className={css["project-img-container"]}>
        <div className={css["project-overlay"]}>{content.work.comingSoon}</div>
      </div>
    </div>
  );
}

export default ProjectItemSkeleton;
