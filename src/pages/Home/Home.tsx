import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

import { TranslationContent } from "../../types/translations";
import { useEffect } from "react";

interface HomeProps {
  content: TranslationContent;
}

export default function Home({ content }: HomeProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className={styles.main}>
      <Hero content={content}></Hero>
      <Projects content={content}></Projects>
      <About content={content}></About>
      <Skills content={content}></Skills>
    </main>
  );
}
