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
  img: string;
};

export interface EducationData {
  mainTitle: string;
  item: {
    title: string;
    subTitle: string;
    description: string;
  }[];
};
