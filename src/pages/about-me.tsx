import Link from 'next/link'
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import styles from '@/styles/AboutMe.module.scss'

export default function AboutMe() {
  return (
    <div className={styles.promo}>
      <Menu />
      
      <SocialNetworkSidebar />
    </div>
  )
}
