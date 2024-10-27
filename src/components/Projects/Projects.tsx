import { useContext } from "react";
import { TranslationsContext } from "../../routes";
import { Link } from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./Projects.module.css";

export default function Projects() {
  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  const renderedProjects = translations.projects.projectsInfo.map(
    (projectInfo, index) => {
      return (
        <Link
          key={index}
          to={`/project/${index + 1}`}
          className={`${styles.projectItem} ${
            translations.projects.projectsInfo.length % 2 > 0 && index == 0
              ? styles.full
              : ""
          }`}
        >
          <ProjectItem projectInfo={projectInfo} />
        </Link>
      );
    }
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className={styles.projectsTitle}>{translations.projects.title}</h3>
      <div className={styles.projectsContainer}>{renderedProjects}</div>
    </section>
  );
}
