import Link from 'next/link';
import Image from 'next/image';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { imagesData } from './api';

import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';

import styles from '@/styles/Certificates.module.scss'

export default function Certificates() {

  return (
    <div className={styles.certificates}>
      <Menu />
      <Container>
        <>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 5, }}>
            <Masonry gutter='20px' className={styles.btnWrapper}>
              <button className={styles.btn}>Show All</button>
              <button className={styles.btn}>Hillel</button>
              <button className={styles.btn}>Udemy</button>
              <button className={styles.btn}>Sololearn</button>
              <button className={styles.btn}>GeekBrains</button>
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            className={styles.galereWrapper}
          >
            <Masonry gutter='20px'>
              {imagesData.map((data, i) => (
                <Link
                  key={i}
                  className={styles.link}
                  href={data.link}
                  target="_blank"
                >
                  <Image
                    className={styles.img}
                    src={data.image}
                    alt={data.alt}
                    height={150}
                    width={200}
                  />
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
