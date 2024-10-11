import { useContext } from "react";
import styles from "./About.module.css";
import { TranslationsContext } from "../../routes";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function About() {
  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  return (
    <section id="about" className={styles.aboutSection}>
      <h3 className={styles.aboutTitle}>{translations.about.title}</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <p>{translations.about.infoP1}</p>
          <p>{translations.about.infoP2}</p>
          <p>
            {translations.about.infoP3}
            <span>
              <FaReact></FaReact> <strong>react</strong>,
            </span>
            <span>
              <RiNextjsLine></RiNextjsLine> <strong>next</strong>,
            </span>
            <span>
              <RiJavascriptLine></RiJavascriptLine> <strong>javascript</strong>,
            </span>
            <span>
              <TbBrandTypescript></TbBrandTypescript>{" "}
              <strong>typescript</strong>,
            </span>{" "}
            {translations.about.infoPConcat}
            <span>
              <FaNodeJs></FaNodeJs> <strong>node.js</strong>
            </span>
            {translations.about.infoP3End}
          </p>
          <p>{translations.about.infoP4}</p>
        </div>
      </div>
    </section>
  );
}
