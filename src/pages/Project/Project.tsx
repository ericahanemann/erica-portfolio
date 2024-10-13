import styles from "./Project.module.css";
import { useEffect } from "react";
import { useContext } from "react";
import { TranslationsContext } from "../../routes";

import { Link, useParams } from "react-router-dom";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiJavascriptLine, RiExternalLinkFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { SiAxios } from "react-icons/si";

export default function Contact() {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  const project = translations.projects.projectsInfo.find(
    (p) => p.id == projectId
  );

  const renderedImages = project?.pagesImages.map((imageUrl, index) => {
    console.log(imageUrl);
    return <img key={index} src={imageUrl} alt={`project page ${index}`} />;
  });

  const renderedTechnologies = project?.technologies.map((tech, index) => {
    const isLast = index === project.technologies.length - 1;

    return (
      <span key={index}>
        <strong>
          {tech}
          {!isLast && ", "}
        </strong>
      </span>
    );
  });

  return (
    <main className={styles.main}>
      <section className={styles.projectImages}>{renderedImages}</section>
      <section className={styles.projectInfo}>
        <div className={styles.projectTitleContainer}>
          <div className={styles.video}>
            <video
              autoPlay
              loop
              muted
              preload="none"
              poster={project?.coverImage}
            >
              <source src={project?.videoDemo} type="video/mp4" />
            </video>
          </div>
          <h3 className={styles.projectTitle}>{project?.projectName}</h3>
        </div>

        <div className={styles.projectDescContainer}>
          <div>
            <p className={styles.projectDesc}>{project?.projectDescription}</p>
            <p className={styles.projectDesc}>
              principais tecnologias utilizadas: &nbsp;
              {renderedTechnologies}
            </p>
          </div>
          <div className={styles.projectLinks}>
            <a
              className={styles.projectLinkItem}
              href={project?.repoUrl || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub></FaGithub>
              github
            </a>
            <a
              className={styles.projectLinkItem}
              href={project?.liveUrl || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <RiExternalLinkFill></RiExternalLinkFill>
              live
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
