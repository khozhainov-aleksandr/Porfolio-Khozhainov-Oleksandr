import {
  SocialNetworkData,
  AboutSkillsData,
  MetaPropertyData,
  MenuData,
  EducationData,
  ImagesData,
  SkillsCardsData,
  PortfolioData,
  ContactsData,
} from './interface';

import { MdAnchor } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { IoSchoolOutline, IoFastFoodOutline } from "react-icons/io5";

import metaImg from '@/img/meta/pic_meta.jpg';

import imgHillelBasic from '@/img/certificates/Hillel__Front-End_Basic-min.jpg';
import imgHillelPro from '@/img/certificates/Hillel__Front-End_Pro-min.jpg';
import imgUdemyBasicsHtml from '@/img/certificates/Udemy__Basics-of-HTML-Course-min.jpg';
import imgUdemyGit from '@/img/certificates/Udemy__Git_The-Complete-Course-for-Beginners-and-Beyond-min.jpg';
import imgUdemyJSIntense from '@/img/certificates/Udemy__Intense-immersion-in-JavaScript-min.jpg';
import imgUdemyWebDev from '@/img/certificates/Udemy__WEB-Developer-2020-min.jpg';
import imgSololearnHtml from '@/img/certificates/SOLOLEARN__HTML-min.jpg';
import imgSololearnCss from '@/img/certificates/SOLOLEARN__CSS-min.jpg';
import imgGeekBrainsProgramming from '@/img/certificates/GeekBrains__Programming-basics_Beginner-min.jpg';

import HTML5Icon from '@/icon/skills/html5.svg';
import CSS3Icon from '@/icon/skills/css3.svg';
import JavaScriptIcon from '@/icon/skills/javascript.svg';
import TypeScriptIcon from '@/icon/skills/typescript.svg';
import ReactIcon from '@/icon/skills/react.svg';
import ReduxIcon from '@/icon/skills/redux.svg';
import NextJsIcon from '@/icon/skills/next.svg';
import VercelIcon from '@/icon/skills/vercel.svg';
import CSSModulesIcon from '@/icon/skills/css_modules.svg';
import SASSIcon from '@/icon/skills/sass.svg';
import BootstrapIcon from '@/icon/skills/bootstrap.svg';
import jQueryIcon from '@/icon/skills/jquery.svg';
import ESlintIcon from '@/icon/skills/eslint.svg';
import WebpackIcon from '@/icon/skills/webpack.svg';
import GulpIcon from '@/icon/skills/gulp.svg';
import GITIcon from '@/icon/skills/git.svg';
import BEMIcon from '@/icon/skills/bem.svg';
import ResponsiveDesignIcon from '@/icon/skills/responsive.svg';
import SVGIcon from '@/icon/skills/svg.svg';
import PhotoshopIcon from '@/icon/skills/photoshop.svg';

import RootzPicture from '@/img/works/Rootz.jpg';
import EcoCosmeticsPicture from '@/img/works/Eco-Cosmetics.jpg';
import MyBiKEPicture from '@/img/works/MyBiKE.jpg';
import UberPicture from '@/img/works/Uber.jpg';
import RunSmartPicture from '@/img/works/RunSmart.jpg';
import FirstPortfolioPicture from '@/img/works/First-Portfolio.jpg';
import ActiveBoxPicture from '@/img/works/ActiveBox.jpg';
import NetclicksPicture from '@/img/works/Netclicks.jpg';

import TelephoneIcon from '@/icon/social/phone.svg';
import EmailIcon from '@/icon/social/email.svg';
import TelegramIcon from '@/icon/social/telegram.svg';
import LinkedinIcon from '@/icon/social/linkedin.svg';
import FacebookIcon from '@/icon/social/facebook.svg';
import InstagramIcon from '@/icon/social/instagram.svg';
import GitHubIcon from '@/icon/social/github.svg';

// ! --- --- --- ---

export const myPhone: string = '+31617200901';
export const myEmail: string = 'khozhainov.aleksandr@gmail.com';
export const myResume: string = 'https://drive.google.com/file/d/1xp7kIVdwRx_yV4wNcBTuykj_PClTeT7l/view?usp=sharing';

export const currentCity: string = 'Overloon';
export const currentCityLink: string = 'https://goo.gl/maps/Vr5FiSH98SusUKct5';

export const currentCountry: string = 'Netherlands';
export const currentCountryLink: string = 'https://goo.gl/maps/qD7YN28kcfJLaDqi8';

// ! --- --- --- --- ---

export const metaPropertyData: MetaPropertyData = {
  title: 'Portfolio',
  author: 'Khozhainov Oleksandr',
  siteName: 'Portfolio: Khozhainov Oleksandr | React Developer',
  description: 'My Education and Certificate, Skills, which I use in my Projects, Works and Contacts.',
  keywords: 'React, Redux, Next.js, MUI React, TypeScript, JavaScript, HTML5, CSS3, CSS Modules, Styled Components, Sass, BEM, Bootstrap, Fetch, REST API, WebSocket, Figma, Avocode, Photoshop, Git flow, GitHub, VS Code, WebStorm, Chrome Developer Tools, NPM, Yarn, Webpack, Jira',
  type: 'website',
  url: 'https://porfolio-khozhainov-oleksandr.vercel.app',
  image: metaImg.src,
};

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
    icon: LinkedinIcon.src,
    alt: 'LinkedIn icon',
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/alex_kh28',
    icon: InstagramIcon.src,
    alt: 'Instagram icon',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/khozhainov-aleksandr',
    icon: GitHubIcon.src,
    alt: 'GitHub icon',
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

export const skillsCardsData: SkillsCardsData[] = [
  {
    title: 'HTML5',
    description: 'Completed studies of HTML (HyperText Markup Language), learned how to do semantic page layout, HTML5 standard, apply Tags and Attributes on the site.',
    img: HTML5Icon,
  },
  {
    title: 'CSS3',
    description: 'Completed studies of CSS (Cascading Style Sheets) Learned how to style elements on a web page using Tags, Selectors and Classes, work with Animations (@keyframes), work with pseudo-classes: before; : after; : nth-child (); and: hover effect.',
    img: CSS3Icon,
  },
  {
    title: 'Java Script',
    description: 'I am learning JavaScript programming language for writing logic on a website working with DOM. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.',
    img: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    description: 'TypeScript extends JavaScript by adding data types, classes, and other object-oriented features with type-checking. It is a typed superset of JavaScript that compiles to plain JavaScript. It is designed for the development of large applications.',
    img: TypeScriptIcon,
  },
  {
    title: 'React',
    description: 'React can be used as a base in the development of single-page, mobile, or server-rendered applications. React applications usually requires the use of additional libraries for routing.',
    img: ReactIcon,
  },
  {
    title: 'Redux',
    description: 'Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.',
    img: ReduxIcon,
  },
  {
    title: 'Next.js',
    description: 'Traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.',
    img: NextJsIcon,
  },
  {
    title: 'Vercel',
    description: 'Vercel enable frontend teams to develop, preview, and ship delightful user experiences, where performance is the default. It is possible to deploy such libraries as - Next.js, React App, SvelteKit, Nuxt.',
    img: VercelIcon,
  },
  {
    title: 'CSS Modules',
    description: 'CSS Modules are very popular because they automatically make class and animation names unique so you don’t have to worry about selector name collisions.',
    img: CSSModulesIcon,
  },
  {
    title: 'SCSS / SASS',
    description: 'I use SCSS and SASS preprocessor for convenient site styling, nesting of elements, variables and blocking for convenient site support.',
    img: SASSIcon,
  },
  {
    title: 'Bootstrap',
    description: 'I studied the library Bootstrap, learned how to use the finished Bootstrap grid for faster adaptive layout on real projects.',
    img: BootstrapIcon,
  },
  {
    title: 'jQuery',
    description: 'I use the jQuery library in practice to connect plug-ins and configure them (pop-ups, sliders, animations, modal windows and Parallax effect)',
    img: jQueryIcon,
  },
  {
    title: 'ESlint',
    description: 'ESLint supports current standards of ECMAScript, and experimental syntax from drafts for future standards. Code using JSX or TypeScript can also be processed when a plugin or transpiler is used.',
    img: ESlintIcon,
  },
  {
    title: 'Webpack',
    description: 'Webpack is highly extensible via rules which allow developers to write custom tasks that they want to perform when bundling files together.',
    img: WebpackIcon,
  },
  {
    title: 'Gulp',
    description: 'I studied the configuration of the builders for more convenient and quick website development from converting SCSS to CSS, Minification JS file and Image Optimization. Creating a virtual server emulator.',
    img: GulpIcon,
  },
  {
    title: 'GIT',
    description: 'Learned to work with a GIT system. Work with remote and local repositories, work with repository branches, do git commit, status, diff, log, reset, checkout, remote, push and pull, merge and rebase, branch and git cherry-pick.',
    img: GITIcon,
  },
  {
    title: 'BEM Methodology',
    description: 'I studied the BEM naming (Block, Element, Modifier) and put it into practice for the convenience of creating and maintaining the site in the future.',
    img: BEMIcon,
  },
  {
    title: 'Responsive design',
    description: 'I learned to work with @media screen and do adaptive layout for mobile devices. I also have experience in mobile first layout',
    img: ResponsiveDesignIcon,
  },
  {
    title: 'SVG',
    description: 'I studied Vector Graphics, learned how to apply SVG to a website, adjust the size of SVG images and change color when: hover effect when necessary.',
    img: SVGIcon,
  },
  {
    title: 'Figma / Avocode / Photoshop',
    description: 'I am able to work with these tools for typesetting web pages according to the .PSD and .FIG layout.',
    img: PhotoshopIcon,
  },
];

export const portfolioData: PortfolioData[] = [
  {
    className: 'Rootz',
    link: 'https://my-project-rootz.vercel.app',
    img: RootzPicture.src,
    alt: 'Rootz Project picture',
  },
  {
    className: 'EcoCosmetics',
    link: 'https://khozhainov-aleksandr.github.io/My-project__Eco-Cosmetics/',
    img: EcoCosmeticsPicture.src,
    alt: 'Eco-Cosmetics Project picture',
  },
  {
    className: 'MyBiKE',
    link: 'https://khozhainov-aleksandr.github.io/My-project__MyBiKE/',
    img: MyBiKEPicture.src,
    alt: 'MyBiKE Project picture',
  },
  {
    className: 'Uber',
    link: 'https://khozhainov-aleksandr.github.io/My-project__Uber/',
    img: UberPicture.src,
    alt: 'Uber Project picture',
  },
  {
    className: 'RunSmart',
    link: 'https://khozhainov-aleksandr.github.io/My-project__RunSmart/',
    img: RunSmartPicture.src,
    alt: 'RunSmart Project picture',
  },
  {
    className: 'FirstPortfolio',
    link: 'https://khozhainov-aleksandr.github.io/My-project__First-Portfolio/',
    img: FirstPortfolioPicture.src,
    alt: 'First Portfolio Project picture',
  },
  {
    className: 'ActiveBox',
    link: 'https://khozhainov-aleksandr.github.io/My-project__ActiveBox/',
    img: ActiveBoxPicture.src,
    alt: 'ActiveBox Project picture',
  },
  {
    className: 'Netclicks',
    link: 'https://khozhainov-aleksandr.github.io/My-project__Netclicks/',
    img: NetclicksPicture.src,
    alt: 'Netclicks Project picture',
  },
];

export const contactsData: ContactsData[] = [
  {
    link: `tel:${myPhone}`,
    img: TelephoneIcon,
    alt: 'Telephone',
  },
  {
    link: `mailto:${myEmail}`,
    img: EmailIcon,
    alt: 'Email',
  },
  {
    link: 'tg://resolve?domain=Aleksandr_Khozhainov',
    img: TelegramIcon,
    alt: 'Telegram',
  },
  {
    link: 'https://www.linkedin.com/in/aleksandr-khozhainov-359172165',
    img: LinkedinIcon,
    alt: 'Linkedin',
  },
  {
    link: 'https://www.facebook.com/Aleksandr.Khozhainov',
    img: FacebookIcon,
    alt: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/alex_kh28/',
    img: InstagramIcon,
    alt: 'Instagram',
  },
  {
    link: 'https://github.com/khozhainov-aleksandr',
    img: GitHubIcon,
    alt: 'GitHub',
  },
];