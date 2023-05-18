import Link from 'next/link'
import Image from 'next/image';
import { aboutSkillsData, myResume } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';

import MyPhotoImg from '@/img/my_photo/my_photo_header.jpg';
import { MdLocationPin } from "react-icons/md";
import { MdCloudDownload } from "react-icons/md";
import styles from '@/styles/AboutMe.module.scss'

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <Menu />
      <SocialNetworkSidebar />
      <Container>
        <div className={styles.mainWrapper}>
          <div className={styles.myPhoto}>
            <Image
              src={MyPhotoImg}
              alt="My Photo"
              width={300}
            />
          </div>
          <div className={styles.descWrapper}>
            <h2 className={styles.descTitle}>
              About me
            </h2>
            <div className={styles.descSubTitle}>
              My name is Oleksandr
            </div>
            <Divider position='start' />
            <div className={styles.descText}>
              I changed my previous job to IT profession because I want to do my favorite thing! <br />
              I always study new and actual technologies and grow in profession, I like to work in team on interesting projects. <br />
              I like to be Developer and solve logical tasks. <br />
              I am an attentive, responsible person, with a high level of self-organization and concentration. <br />
              I am disciplined, focused on achieving results, constant striving to learn new technologies and working tools.
            </div>
          </div>
          <div className={styles.skillsWrapper}>
            <div className={styles.skillsItem}>
              <div className={styles.skillsCircle}>
                <MdLocationPin size={28} />
              </div>
              <div>
                <div className={styles.skillsTitle}>
                  Contacts and Location
                </div>
                <ul className={styles.skillsList}>
                  {aboutSkillsData.map((data, i) => (
                    <li key={i} className={styles.skillsItem}>
                      <Link
                        className={styles.skillsLink}
                        href={data.link}
                        target={data.target}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <div className={styles.skillsCircle}>
                <MdCloudDownload size={28} />
              </div>
            <div>
                <div className={styles.skillsTitle}>
                  Download Resume
                </div>
                <div className={styles.skillsResumeDesc}>
                  Button below opens my CV in Google Drive
                  and allows you to Download it as a PDF format.
                </div>
                <div >
                <Link
                  className={styles.skillsResumeBtn}
                  href={myResume}
                  target="_blank"
                >
                  Click Here !
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
