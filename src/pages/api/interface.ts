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
  icon: JSX.Element;
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
