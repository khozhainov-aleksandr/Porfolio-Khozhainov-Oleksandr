import Link from 'next/link';
import Image from 'next/image';
import linkedinImg from '../../icon/social/linkedin.svg';
import instagramImg from '../../icon/social/instagram.svg';
import githubImg from '../../icon/social/github.svg';
import styles from './SocialNetworkSidebar.module.scss';

interface SocialNetworkData {
  title: string;
  link: string;
  img: string;
}

const socialNetworkData: SocialNetworkData[] = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aleksandr-khozhainov-359172165',
    img: linkedinImg,
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/alex_kh28/',
    img: instagramImg,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/khozhainov-aleksandr',
    img: githubImg,
  },
]

export const SocialNetworkSidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {socialNetworkData.map((data: SocialNetworkData, i) => (
        <Link
          key={i}
          href={data.link}
          className={styles.link}
          target="_blank"
        >
          <Image
            height={22}
            width={22}
            src={data.img}
            alt={data.title}
          />
        </Link>
      ))}
      <div className={styles.divider}></div>
      <div className={styles.description}>
        <span>Social Networks</span>
      </div>
    </aside>
  )
};
