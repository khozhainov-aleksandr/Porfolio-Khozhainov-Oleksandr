import {
  SocialNetworkData,
  AboutSkillsData,
  MenuData,
  EducationData,
  ImagesData,
} from './interface';

import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { MdAnchor } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { IoSchoolOutline, IoFastFoodOutline } from "react-icons/io5";

import imgHillelBasic from '../../img/certificates/Hillel__Front-End_Basic-min.jpg';
import imgHillelPro from '../../img/certificates/Hillel__Front-End_Pro-min.jpg';
import imgUdemyBasicsHtml from '../../img/certificates/Udemy__Basics-of-HTML-Course-min.jpg';
import imgUdemyGit from '../../img/certificates/Udemy__Git_The-Complete-Course-for-Beginners-and-Beyond-min.jpg';
import imgUdemyJSIntense from '../../img/certificates/Udemy__Intense-immersion-in-JavaScript-min.jpg';
import imgUdemyWebDev from '../../img/certificates/Udemy__WEB-Developer-2020-min.jpg';
import imgSololearnHtml from '../../img/certificates/SOLOLEARN__HTML-min.jpg';
import imgSololearnCss from '../../img/certificates/SOLOLEARN__CSS-min.jpg';
import imgGeekBrainsProgramming from '../../img/certificates/GeekBrains__Programming-basics_Beginner-min.jpg';

// ! --- --- --- ---

export const myPhone: string = '+31617200901';
export const myEmail: string = 'khozhainov.aleksandr@gmail.com';
export const myResume: string = 'https://drive.google.com/file/d/14WhBfjpDdpD4AntjGS4aOV03Hxxe_Xi7/view?usp=sharing';

export const currentCity: string = 'Overloon';
export const currentCityLink: string = 'https://goo.gl/maps/Vr5FiSH98SusUKct5';

export const currentCountry: string = 'Netherlands';
export const currentCountryLink: string = 'https://goo.gl/maps/qD7YN28kcfJLaDqi8';

// ! --- --- --- --- ---

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

export const aboutSkillsData: AboutSkillsData[] = [
  {
    title: currentCity,
    link: currentCityLink,
    target: '_blank',
  },
  {
    title: currentCountry,
    link: currentCountryLink,
    target: '_blank',
  },
  {
    title: myPhone,
    link: `tel:${myPhone}`,
    target: '_self',
  },
  {
    title: myEmail,
    link: `mailto:${myEmail}`,
    target: '_self',
  },
];

export const socialNetworkData: SocialNetworkData[] = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleksandr-khozhainov',
    icon: <FaLinkedin size={40} />,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/alex_kh28',
    icon: <FaInstagramSquare size={40} />,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/khozhainov-aleksandr',
    icon: <FaGithubSquare size={40} />,
  },
];

export const educationData: EducationData[] = [
  {
    mainTitle: 'IT Education',
    items: [
      {
        title: 'Mate Academy',
        subTitle: 'Full day education to Front-End Developer (2022)',
        description: 'I studied at Mate Academy. The lessons lasted 4 months, 5 days a week from 9 to 18 + Conversation Club in English. A lot of practice in writing code during the study.',
        icon: <IoSchoolOutline size={26} />,
      },
      {
        title: 'Hillel School',
        subTitle: 'Front-End Basic (2019) | Front-End Pro (2020)',
        description: 'I finished at Hillel School, completed 2 courses "Front-End Basic" and "Front-End Pro". Studied such technologies HTML, CSS, SCSS, Bootstrap, JavaScript, LocalStorage, Fetch requests and worked with API, Gulp, and jQuery library.',
        icon: <GiDiploma size={26} />,
      },
    ]
  },
  {
    mainTitle: 'Other Education',
    items: [
      {
        title: 'Odessa National Maritime Academy',
        subTitle: 'Navigator | Odessa (2011-2016)',
        description: 'I finished studying at the Odessa National Maritime Academy in Odessa with the diploma of Specialist. The period of study at the Academy was 5 years.',
        icon: <MdAnchor size={26} />,
      },
      {
        title: 'ONA of Nutrition Technologies',
        subTitle: 'Restaurant business administrator | Odessa (2006-2010)',
        description: 'I finished studying at the Odessa National Academy of Nutrition Technologies in Odessa with the diploma of Bachelor. The period of study at the Academy was 4 years.',
        icon: <IoFastFoodOutline size={26} />,
      },
    ]
  },
];

export const imagesData: ImagesData[] = [
  {
    title: 'Hillel',
    image: imgHillelBasic.src,
    alt: 'Certificate Hillel Basic',
    link: 'https://tinyurl.com/y75w9wr8'
  },
  {
    title: 'Hillel',
    image: imgHillelPro.src,
    alt: 'Certificate Hillel Pro',
    link: 'https://tinyurl.com/y9gk2zpu'
  },
  {
    title: 'Udemy',
    image: imgUdemyBasicsHtml.src,
    alt: 'Certificate Udemy Basics HTML',
    link: 'https://tinyurl.com/yb6thkar'
  },
  {
    title: 'Udemy',
    image: imgUdemyGit.src,
    alt: 'Certificate Udemy Git',
    link: 'https://tinyurl.com/ycvtqbte'
  },
  {
    title: 'Udemy',
    image: imgUdemyJSIntense.src,
    alt: 'Certificate Udemy JS Intense',
    link: 'https://tinyurl.com/y9jcqqza'
  },
  {
    title: 'Udemy',
    image: imgUdemyWebDev.src,
    alt: 'Certificate Web Developer',
    link: 'https://tinyurl.com/ybx6nc4x'
  },
  {
    title: 'Sololearn',
    image: imgSololearnHtml.src,
    alt: 'Certificate Sololearn HTML',
    link: 'https://tinyurl.com/ybhgm5mr'
  },
  {
    title: 'Sololearn',
    image: imgSololearnCss.src,
    alt: 'Certificate Sololearn CSS',
    link: 'https://tinyurl.com/y9mmznpy'
  },
  {
    title: 'GeekBrains',
    image: imgGeekBrainsProgramming.src,
    alt: 'Certificate GeekBrains Programming',
    link: 'https://tinyurl.com/ydgpwq35'
  },
];

export const certificateButtonData = [
  {title: 'Show All', arg: imagesData},
  {title: 'Hillel', arg: 'Hillel'},
  {title: 'Udemy', arg: 'Udemy'},
  {title: 'Sololearn', arg: 'Sololearn'},
  {title: 'GeekBrains', arg: 'GeekBrains'},
];