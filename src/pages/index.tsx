import Head from 'next/head';
import Link from 'next/link'
import { metaPropertyData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.promo}>
      <Head>
        <title>{metaPropertyData.title}</title>
        <meta name='title' content={metaPropertyData.siteName} />
        <meta name='description' content={metaPropertyData.description} />
        <meta name='keywords' content={metaPropertyData.keywords} />
        <meta name='author' content={metaPropertyData.author} />

        <meta property="og:title" content={metaPropertyData.siteName} />
        <meta property="og:description" content={metaPropertyData.description} />
        <meta property="og:type" content={metaPropertyData.type} />
        <meta property="og:url" content={metaPropertyData.url} />
        <meta property="og:image" content={metaPropertyData.image} />
      </Head>
      <Menu />
      <Container>
        <>
          <div className={styles.subTitle}>
            My name is Oleksandr Khozhainov
          </div>
          <h1 className={styles.title}>
            I am a React Developer <br /> from Odessa
          </h1>
          <div className={styles.btnWrapper}>
            <Link
              className={styles.btnLinkColored}
              href='/portfolio'
            >
              Portfolio
            </Link>
            <Link
              className={styles.btnLink}
              href='/about-me'
            >
              About me
            </Link>
          </div>
        </>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
