import { useContext } from "react";
import styles from "./Skills.module.css";
import { TranslationsContext } from "../../routes";

import Tilt from "react-parallax-tilt";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiHtml5Fill,
} from "react-icons/ri";
import { BiLogoRedux, BiLogoTypescript, BiLogoFigma } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";

export default function Skills() {
  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  return (
    <section id="skills" className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>{translations.skills.title}</h3>
      <div className={styles.skillsContainer}>
        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiReactjsFill className={styles.skillItemIcon}></RiReactjsFill>
            </div>
            <p className={styles.skillItemName}>REACT</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiNextjsFill className={styles.skillItemIcon}></RiNextjsFill>
            </div>
            <p className={styles.skillItemName}>NEXT.JS</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <BiLogoRedux className={styles.skillItemIcon}></BiLogoRedux>
            </div>
            <p className={styles.skillItemName}>REDUX</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiTailwindCssFill
                className={styles.skillItemIcon}
              ></RiTailwindCssFill>
            </div>
            <p className={styles.skillItemName}>TAILWIND CSS</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <BiLogoTypescript
                className={styles.skillItemIcon}
              ></BiLogoTypescript>
            </div>
            <p className={styles.skillItemName}>TYPESCRIPT</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiJavascriptFill
                className={styles.skillItemIcon}
              ></RiJavascriptFill>
            </div>
            <p className={styles.skillItemName}>JAVASCRIPT</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiNodejsFill className={styles.skillItemIcon}></RiNodejsFill>
            </div>
            <p className={styles.skillItemName}>NODE.JS</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <RiHtml5Fill className={styles.skillItemIcon}></RiHtml5Fill>
            </div>
            <p className={styles.skillItemName}>HTML5</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <IoLogoCss3 className={styles.skillItemIcon}></IoLogoCss3>
            </div>
            <p className={styles.skillItemName}>CSS3</p>
          </a>
        </Tilt>

        <Tilt
          className={styles.card}
          tiltReverse={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={5}
          scale={1.05}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#919191"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.skillItem}
          >
            <div className={styles.skillItemIconContainer}>
              <BiLogoFigma className={styles.skillItemIcon}></BiLogoFigma>
            </div>
            <p className={styles.skillItemName}>FIGMA</p>
          </a>
        </Tilt>
      </div>
    </section>
  );
}
