import { Link } from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./Projects.module.css";

import { TranslationContent } from "../../types/translations";

interface ProjectsProps {
  content: TranslationContent;
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className={styles.projectsTitle}>{content.projects.title}</h3>
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
