import Link from 'next/link'
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.promo}>
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
