import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
    </main>
  );
}
