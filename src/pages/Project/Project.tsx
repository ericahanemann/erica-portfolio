import styles from "./Project.module.css";
import { useEffect } from "react";

import project1BgVideo from "../../assets/video/video-test.mp4";
import projectPrint1 from "/img/project-1-1.png";
import projectPrint2 from "/img/project-1-2.png";
import projectPrint3 from "/img/project-1-3.png";
import projectPrint4 from "/img/project-2-1.png";

import { Link } from "react-router-dom";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiJavascriptLine, RiExternalLinkFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { SiAxios } from "react-icons/si";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.projectImages}>
        <img src={projectPrint1} alt="project printscreen" />
        <img src={projectPrint2} alt="project printscreen" />
        <img src={projectPrint3} alt="project printscreen" />
        <img src={projectPrint4} alt="project printscreen" />
      </section>
      <section className={styles.projectInfo}>
        <div className={styles.projectTitleContainer}>
          <div className={styles.video}>
            <video autoPlay loop muted preload="none" poster={projectPrint1}>
              <source src={project1BgVideo} type="video/mp4" />
            </video>
          </div>
          <h3 className={styles.projectTitle}>website rfcc</h3>
        </div>

        <div className={styles.projectDescContainer}>
          <div>
            <p className={styles.projectDesc}>
              Watchthis é uma aplicação que se conecta à API do The Movie
              Database para fornecer recomendações de filmes em alta, os mais
              bem avaliados e os próximos lançamentos. Você pode explorar
              informações detalhadas sobre cada filme e até mesmo criar sua
              própria watchlist.
            </p>
            <p className={styles.projectDesc}>
              principais tecnologias utilizadas: &nbsp;
              <span>
                <FaReact></FaReact> <strong>react</strong>,
              </span>{" "}
              &nbsp;
              <span>
                <RiJavascriptLine></RiJavascriptLine>{" "}
                <strong>javascript</strong>,
              </span>
              &nbsp;
              <span>
                <TbBrandTailwind></TbBrandTailwind>{" "}
                <strong>tailwind css</strong>,
              </span>
              &nbsp;
              <span>
                <SiAxios></SiAxios> <strong>axios</strong>
              </span>
              &nbsp;
            </p>
          </div>
          <div className={styles.projectLinks}>
            <Link className={styles.projectLinkItem} to="#">
              <FaGithub></FaGithub>
              github
            </Link>
            <Link className={styles.projectLinkItem} to="#">
              <RiExternalLinkFill></RiExternalLinkFill>
              live
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
