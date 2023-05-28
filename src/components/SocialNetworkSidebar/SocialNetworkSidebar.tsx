import Link from 'next/link';
import Image from 'next/image';
import { socialNetworkData } from '@/pages/api';
import styles from './SocialNetworkSidebar.module.scss';

export const SocialNetworkSidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    {socialNetworkData.map((data, i) => (
      <Link
        key={i}
        href={data.link}
        className={styles.link}
        target="_blank"
      >
        <Image
          className={styles.icon}
          src={data.icon}
          alt={data.alt}
          height={20}
          width={20}
        />
      </Link>
    ))}
    <div className={styles.divider}></div>
    <div className={styles.description}>
      <span>Social Networks</span>
    </div>
  </aside>
);
