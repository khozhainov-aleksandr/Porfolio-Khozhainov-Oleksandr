export interface MenuData {
  title: string;
  link: string;
};

export interface AboutSkillsData {
  title: string;
  link: string;
  target: string;
};

export interface SocialNetworkData {
  title: string;
  link: string;
  icon: string;
  alt: string;
};

export interface TimerData {
  timeValue: number;
  timeName: string;
};

export interface EducationData {
  mainTitle: string;
  items: {
    title: string;
    subTitle: string;
    icon: JSX.Element;
    description: string;
  }[];
};

export interface ImagesData {
  title: string;
  image: string;
  alt: string;
  link: string;
};

export interface CertificateButtonData {
  title: string;
  arg: string | ImagesData;
};

export interface SkillsCardsData {
  title: string;
  description: string;
  img: string;
};

export interface PortfolioData {
  className: string;
  link: string;
  img: string;
  alt: string;
};

export interface ContactsData {
  link: string;
  img: string;
  alt: string;
};
