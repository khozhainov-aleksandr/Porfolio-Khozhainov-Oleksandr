import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import { ImagesData } from './api/interface';
import { imagesData, certificateButtonData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';

import styles from '@/styles/Certificates.module.scss'

export default function Certificates() {
  const [showCertificate, setShowCertificate] = useState<ImagesData[]>(imagesData);

  const getFilterCertificate = (value: string) => (
    imagesData.filter((img) => img.title === value)
  );

  return (
    <div className={styles.certificates}>
      <Menu />
      <Container>
        <>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 5, }}>
            <Masonry gutter='20px' className={styles.btnWrapper}>
              {certificateButtonData.map((button, i) => (
                <button
                  key={i}
                  className={styles.btn}
                  onClick={() => 
                    typeof button.arg !== 'string'
                    ? setShowCertificate(button.arg)
                    : setShowCertificate(getFilterCertificate(button.arg))
                  }
                >
                  {button.title}
                </button>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            className={styles.galereWrapper}
          >
            <Masonry gutter='20px'>
              {showCertificate.map((data, i) => (
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
