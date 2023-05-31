import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { metaPropertyData, contactsData, myEmail } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import myPhoto from '@/img/my_photo/my_photo_footer.jpg';
import styles from '@/styles/Contacts.module.scss'

export default function Contacts() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);
  const [activeCopyBtn, setActiveCopyBtn] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    const checkName = name.length >= 1;
    const checkMassage = message.length >= 1;
    const checkEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    (checkName && checkMassage && checkEmail && checkBox)
      ? setButton(false)
      : setButton(true);
  }, [name, email, message, checkBox])

  const pushButton = () => {
    setPopUp(true);
  }

  const closePopUp = () => {
    setName('');
    setEmail('');
    setMessage('');
    setCheckBox(false);
    setActiveCopyBtn(false);
    setPopUp(false);
  }

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
              alt='My Photo'
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
                  target='_blank'
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
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              <div className={styles.inputWrapper}>
                <label htmlFor='name'>
                  Your Name
                </label>
                <input
                  required
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor='email'>
                  Your Email
                </label>
                <input
                  required
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={styles.textAreaWrapper}>
                <label htmlFor='text'>
                  Your message for Me
                </label>
                <textarea
                  name='text'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className={styles.triggers}>
                <button
                  className={styles.button}
                  disabled={button}
                  onClick={pushButton}
                >
                  Send message
                </button>
                <div className={styles.policyWrapper}>
                  <input
                    type='checkbox'
                    checked={checkBox}
                    onChange={(event) => {
                      setCheckBox(event.target.checked);
                    }}
                    required
                  />
                  <span>{'I agree with the '} 
                    <Link href='./doc/policy.html' target='_blank'>
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
      {popUp && (
        <div className={styles.popUpWrapper}>
          <div className={styles.popUp}>
            <IoCloseCircle
              className={styles.closeBtn}
              size={32}
              onClick={closePopUp}
            />
            <div className={styles.popUpUserDataWrapper}>
              <p><span>Name:</span> {name}</p>
              <p><span>Email:</span> {email}</p>
              <p className={styles.popUpMessage}><span>Message:</span> {message}</p>
            </div>
            <Divider position='center' />
            <div className={styles.popUpDescription}>
              <p>Sending a message is not working at the moment, we apologize.</p>
              <p>
                We invite you to
                <button
                  className={classnames(styles.copyBtn, {
                    [styles.copyBtnActive]: activeCopyBtn
                  })}
                  onClick={() => {
                    setActiveCopyBtn(true);
                    navigator.clipboard.writeText(message);
                  }}
                >
                  copy your message
                </button>
                and send it directly to
                <Link href={`mailto:${myEmail}`} target='_blank'>
                  {' My Email '}
                </Link>
                and
                <br />
                I will answer you as soon as possible.
              </p>
              <p>Thank you for understanding. Best regards Oleksandr Khozhainov.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
