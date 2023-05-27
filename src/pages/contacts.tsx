import Link from 'next/link';
import Image from 'next/image';

import { contactsData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';

import myPhoto from '../img/my_photo/my_photo_footer.jpg';
import styles from '@/styles/Contacts.module.scss'

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <Menu />
      <Container>
        <div className="contacts__wrapper">
          <div className="contacts__photo">
            <Image
              src={myPhoto}
              alt="My Photo"
              width={140}
              height={200}
            />
          </div>
          <div className="contacts__descr">
            <h1 className={styles.mainTitle}>
              My Contacts
            </h1>
            <Divider position='start' />

            <div className="title title_fz14 contacts__text">
              Any way convenient for you:
            </div>
            <div className="contacts__social">
              {contactsData.map((data, i) => (
                <Link
                key={i}
                  href={data.link}
                  target="_blank"
                >
                  <Image
                    src={data.img}
                    alt={data.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
            <div className="title title_fz14 contacts__text">
              Or leave your details and I will write to you myself:
            </div>
            <form action="#" className="contacts__form">
              <div className="contacts__input">
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
              <div className="contacts__input">
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

              <div className="contacts__textarea">
                <textarea name="text" id="text"></textarea>
                <label htmlFor="text">
                  Your message for Me
                </label>
              </div>
              <div className="contacts__triggers">
                <button className="contacts__btn btn">
                  Send message
                </button>
                <div className="contacts__policy">
                  <input required type="checkbox"/ >
                  <span>I agree with the 
                    <Link href="./doc/policy.html" target="_blank">
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
