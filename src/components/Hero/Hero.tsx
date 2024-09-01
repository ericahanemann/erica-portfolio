import styles from "./Hero.module.css";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInfo}>
        <h4 className={styles.heroInfoTitle}>FRONTEND DEVELOPER</h4>
        <p className={styles.heroInfoText}>
          A passionate developer on a mission to blend design and functionality,
          creating immersive frontend experiences that leave a LONG lasting
          impression
        </p>
        <div className={styles.heroInfoSocials}>
          <a
            href="https://github.com/ericahanemann"
            target="_blank"
            rel="noreferrer"
            className={styles.heroSocialIconLink}
          >
            <span></span>
            <GrGithub className={styles.heroSocialIcon}></GrGithub>
            <span></span>
          </a>
          <a
            href="https://www.linkedin.com/in/erica-hanemann/"
            target="_blank"
            rel="noreferrer"
            className={styles.heroSocialIconLink}
          >
            <span></span>
            <GrLinkedin className={styles.heroSocialIcon}></GrLinkedin>
            <span></span>
          </a>
        </div>
      </div>
      <h1 className={styles.name}>
        ERICA <br /> VANESSA <br /> HANEMANN
      </h1>
    </section>
  );
}
