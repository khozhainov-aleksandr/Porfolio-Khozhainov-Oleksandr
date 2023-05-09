import Link from 'next/link'
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.promo}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.subTitle}>
          My name is Oleksandr Khozhainov
        </div>
        <h1 className={styles.title}>
          I am a React Developer <br /> from Odessa
        </h1>
        <div className={styles.btnWrapper}>
          <Link href="" className={styles.btnLinkColored}>
            Portfolio
          </Link>
          <Link href="" className={styles.btnLink}>
            About me
          </Link>
        </div>
      </div>
      <SocialNetworkSidebar />
    </div>
  )
}
