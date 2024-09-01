import { Link } from "react-router-dom";

import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className={styles.projectsTitle}>PROJECTS</h3>
      <Link to="/project">project page</Link>
    </section>
  );
}
