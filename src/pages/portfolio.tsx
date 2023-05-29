import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { metaPropertyData, portfolioData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import styles from '@/styles/Portfolio.module.scss';

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <Head>
        <title>Portfolio</title>
        <meta name='title' content={metaPropertyData.siteName} />
        <meta name='description' content={metaPropertyData.description} />
        <meta name='keywords' content={metaPropertyData.keywords} />
        <meta name='author' content={metaPropertyData.author} />
      </Head>
      <Menu />
      <Container>
        <h1 className={styles.mainTitle}>
          My Portfolio
        </h1>
        <Divider position='center' />
        <div className={styles.linkWrapper}>
          {portfolioData.map((data, i) => (
            <Link
              key={i}
              className={`${styles.link} ${styles[data.className]}`}
              href={data.link}
              target="_blank"
            >
              <Image
                className={styles.picture}
                src={data.img}
                alt={data.alt}
                width={500}
                height={300}
              />
            </Link>
          ))}
        </div>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
