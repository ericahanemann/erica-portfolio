import styles from "./About.module.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

import { TranslationContent } from "../../types/translations";

interface AboutProps {
  content: TranslationContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3 className={styles.aboutTitle}>{content.about.title}</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <p>
            {content.about.infoP1}
          </p>
          <p>{content.about.infoP2}</p>
          <p>
            {content.about.infoP3}
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
            {content.about.infoPConcat}
            <span>
              <FaNodeJs></FaNodeJs> <strong>node.js</strong>
            </span>
            {content.about.infoP3End}
          </p>
          <p>{content.about.infoP4}</p>
        </div>
      </div>
    </section>
  );
}
