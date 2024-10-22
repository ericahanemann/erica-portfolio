export type Project = {
  id: number;
  projectName: string;
  videoDemo: string;
  coverImage: string;
  pagesImages: string[];
  projectDescription: string;
  techDescription: string;
  technologies: string[];
  liveUrl: string | null;
  repoUrl: string;
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
  projects: {
    title: string;
    projectsInfo: Project[];
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
  skills: {
    title: string;
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
