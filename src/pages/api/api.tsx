import { SocialNetworkData, MenuData } from './interface';

import linkedinImg from '@/icon/social/linkedin.svg';
import instagramImg from '@/icon/social/instagram.svg';
import githubImg from '@/icon/social/github.svg';

export const socialNetworkData: SocialNetworkData[] = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleksandr-khozhainov',
    img: linkedinImg,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/alex_kh28',
    img: instagramImg,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/khozhainov-aleksandr',
    img: githubImg,
  },
];

export const menuData: MenuData[] = [
  {
    title: 'About me',
    link: '/about-me',
  },
  {
    title: 'Education',
    link: '/education',
  },
  {
    title: 'Certificates',
    link: '/certificates',
  },
  {
    title: 'Skills',
    link: '/skills',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'Contacts',
    link: '/contacts',
  },
];
