import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </main>
  );
}
