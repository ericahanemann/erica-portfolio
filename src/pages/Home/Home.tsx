import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

import { TranslationContent } from "../../types/translations";

interface HomeProps {
  content: TranslationContent;
}

export default function Home({ content }: HomeProps) {
  return (
    <main className={styles.main}>
      <Hero content={content}></Hero>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
    </main>
  );
}
