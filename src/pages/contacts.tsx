import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { metaPropertyData, contactsData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import myPhoto from '../img/my_photo/my_photo_footer.jpg';
import styles from '@/styles/Contacts.module.scss'

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <Head>
        <title>Contacts</title>
        <meta name='title' content={metaPropertyData.siteName} />
        <meta name='description' content={metaPropertyData.description} />
        <meta name='keywords' content={metaPropertyData.keywords} />
        <meta name='author' content={metaPropertyData.author} />
      </Head>
      <Menu />
      <Container>
        <div className={styles.mainWrapper}>
          <div className={styles.myPhotoWrapper}>
            <Image
            className={styles.myPhoto}
              src={myPhoto}
              alt="My Photo"
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.mainTitle}>
              My Contacts
            </h1>
            <Divider position='start' />
            <p className={styles.text}>
              Any way convenient for you:
            </p>
            <div className={styles.socialWrapper}>
              {contactsData.map((data, i) => (
                <Link
                  key={i}
                  className={styles.socialLink}
                  href={data.link}
                  target="_blank"
                >
                  <Image
                    src={data.img}
                    alt={data.alt}
                    width={30}
                    height={30}
                  />
                </Link>
              ))}
            </div>
            <p className={styles.text}>
              Or leave your details and I will write to you myself:
            </p>
            <form action="#" className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  required
                  name="name"
                  id="name"
                  type="text"
                />
                <label htmlFor="name">
                  Your Name
                </label>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  required
                  name="email"
                  id="email"
                  type="email"
                />
                <label htmlFor="email">
                  Your Email
                </label>
              </div>
              <div className={styles.textAreaWrapper}>
                <textarea name="text" id="text"></textarea>
                <label htmlFor="text">
                  Your message for Me
                </label>
              </div>
              <div className={styles.triggers}>
                <button className={styles.button}>
                  Send message
                </button>
                <div className={styles.policyWrapper}>
                  <input required type="checkbox"/ >
                  <span>{'I agree with the '} 
                    <Link href="/policy" target="_blank">
                      privacy policy
                    </Link> 
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
