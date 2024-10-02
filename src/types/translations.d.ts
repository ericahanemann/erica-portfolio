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
    title: string;
    content: string;
  };
  about: {
    title: string;
    infoP1: string;
    infoP2: string;
    infoP3: string;
    infoPConcat: string;
    infoP3End: string;
    infoP4: string;
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
    formInfo: string;
    formEmail: string;
    nameInput: string;
    emailInput: string;
    messageArea: string;
    submitBtn: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    copyrightText: string;
  };
};

export type Translations = {
  pt: TranslationContent;
  en: TranslationContent;
};
