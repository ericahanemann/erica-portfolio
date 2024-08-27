import { Link } from "react-router-dom";
import styles from "./Home.module.css"

import { GrLinkedin, GrGithub } from "react-icons/gr";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInfo}>
          <h4 className={styles.heroInfoTitle}>FRONTEND DEVELOPER</h4>
          <p className={styles.heroInfoText}>
            A passionate developer on a mission to blend design and
            functionality, creating immersive frontend experiences that leave a
            LONG lasting impression
          </p>
          <div className={styles.heroInfoSocials}>
            <a
              href="https://github.com/ericahanemann"
              target="_blank"
              className={styles.heroSocialIconLink}
            >
              <GrGithub className={styles.heroSocialIcon}></GrGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/erica-hanemann/"
              target="_blank"
              className={styles.heroSocialIconLink}
            >
              <GrLinkedin className={styles.heroSocialIcon}></GrLinkedin>
            </a>
          </div>
        </div>
        <h1 className={styles.name}>
          ERICA <br /> VANESSA <br /> HANEMANN
        </h1>
      </section>
      <Link to="/project">project page</Link>
    </main>
  );
}
