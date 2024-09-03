export type Project = {
  projectName: string;
  finished: string;
  imgUrl: string;
  projectDescription: string;
  technologies: string[];
  liveDemoUrl: string;
  codeUrl: string;
};

export type TranslationContent = {
  navbar: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    title: string
    content: string
  };
  about: {
    title: string;
  };
  projects: {
    title: string;
  };
  skills: {
    title: string;
  };
  work: {
    title: string;
    projects: Project[];
  };
  contact: {
    title: string;
  };
  footer: {
    copyrightText: string;
  };
};

export type Translations = {
  pt: TranslationContent;
  en: TranslationContent;
};
