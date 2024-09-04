import styles from "./About.module.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h3 className={styles.aboutTitle}>ABOUT ME</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <p>
            olá! sou érica, uma desenvolvedora web com foco em{" "}
            <strong>frontend</strong>.
          </p>
          <p>
            desde o início de 2022, tenho me dedicado ao desenvolvimento de
            aplicações web e estou no processo de conclusão do curso tecnólogo
            em análise e desenvolvimento de sistemas.
          </p>
          <p>
            durante esse período, tive a oportunidade de trabalhar com uma
            variedade de tecnologias. no entanto, minha experiência mais sólida
            está em
            <div>
              <FaReact></FaReact> <strong>react</strong>,
            </div>
            <div>
              <RiNextjsLine></RiNextjsLine> <strong>next</strong>,
            </div>
            <div>
              <RiJavascriptLine></RiJavascriptLine> <strong>javascript</strong>,
            </div>
            <div>
              <TbBrandTypescript></TbBrandTypescript>{" "}
              <strong>typescript</strong>,
            </div>{" "}
            e
            <div>
              <FaNodeJs></FaNodeJs> <strong>node.js</strong>
            </div>
            , que são as principais ferramentas que utilizo para construir as
            aplicações em que trabalho.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quibusdam minima repellendus itaque est quis doloribus reprehenderit
            mollitia hic consectetur, soluta quod sit illum, consequatur
            repudiandae placeat ducimus odio voluptatibus.
          </p>
        </div>
      </div>
    </section>
  );
}
