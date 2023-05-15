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
  time: string;
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
