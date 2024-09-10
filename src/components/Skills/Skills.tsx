import styles from "./Skills.module.css";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiHtml5Fill,
} from "react-icons/ri";
import { BiLogoRedux, BiLogoTypescript, BiLogoGit } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>SKILLS</h3>
      <div className={styles.skillsContainer}>
        <a
          href="https://nextjs.org/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiNextjsFill className={styles.skillItemIcon}></RiNextjsFill>
          </div>
          <p className={styles.skillItemName}>NEXT.JS</p>
        </a>

        <a
          href="https://react.dev/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiReactjsFill className={styles.skillItemIcon}></RiReactjsFill>
          </div>
          <p className={styles.skillItemName}>REACT</p>
        </a>

        <a
          href="https://redux.js.org/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <BiLogoRedux className={styles.skillItemIcon}></BiLogoRedux>
          </div>
          <p className={styles.skillItemName}>REDUX</p>
        </a>

        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiTailwindCssFill
              className={styles.skillItemIcon}
            ></RiTailwindCssFill>
          </div>
          <p className={styles.skillItemName}>TAILWIND CSS</p>
        </a>

        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <BiLogoTypescript
              className={styles.skillItemIcon}
            ></BiLogoTypescript>
          </div>
          <p className={styles.skillItemName}>TYPESCRIPT</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiJavascriptFill
              className={styles.skillItemIcon}
            ></RiJavascriptFill>
          </div>
          <p className={styles.skillItemName}>JAVASCRIPT</p>
        </a>

        <a
          href="https://nodejs.org/en"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiNodejsFill className={styles.skillItemIcon}></RiNodejsFill>
          </div>
          <p className={styles.skillItemName}>NODE.JS</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <RiHtml5Fill className={styles.skillItemIcon}></RiHtml5Fill>
          </div>
          <p className={styles.skillItemName}>HTML5</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <IoLogoCss3 className={styles.skillItemIcon}></IoLogoCss3>
          </div>
          <p className={styles.skillItemName}>CSS3</p>
        </a>

        <a
          href="https://git-scm.com/"
          target="_blank"
          className={styles.skillItem}
        >
          <div className={styles.skillItemIconContainer}>
            <BiLogoGit className={styles.skillItemIcon}></BiLogoGit>
          </div>
          <p className={styles.skillItemName}>GIT</p>
        </a>
      </div>
    </section>
  );
}
