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

  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className={styles.projectsTitle}>{translations.projects.title}</h3>
      <div className={styles.projectsContainer}>
        <Link to="/project" className={styles.projectItem}>
          <ProjectItem title="PERFECT HARMORNY MUSIC STORE" />
        </Link>

        <Link to="/project" className={styles.projectItem}>
          <ProjectItem title="WEBSITE RFCC - CANOINHAS" />
        </Link>

        <Link to="/project" className={styles.projectItem}>
          <ProjectItem title="WATCHTHIS" />
        </Link>

        <Link to="/project" className={styles.projectItem}>
          <ProjectItem title="TECH TICKETS APP" />
        </Link>
      </div>
    </section>
  );
}
