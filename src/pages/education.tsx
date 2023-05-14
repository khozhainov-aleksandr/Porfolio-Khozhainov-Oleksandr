import { educationData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import styles from '@/styles/Education.module.scss'

export default function Education() {
  return (
    <div className={styles.education}>
      <Menu />
      <Container>
        <>
          <h1 className={styles.mainTitle}>
            Education
          </h1>
          <h2 className={styles.subTitle}>
            My Education and Certificate
          </h2>
          <div className={styles.divider} />

          <div className={styles.timer}>
            <div className={styles.timerTitle}>
              Experience Time
            </div>
            <div className={styles.timerWrapper}>
              <div className={styles.timerBlock}>
                <span id="years">03</span>year
              </div>
              <div className={styles.timerBlock}>
                <span id="months">07</span>months
              </div>
              <div className={styles.timerBlock}>
                <span id="days">12</span>days
              </div>
              <div className={styles.timerBlock}>
                <span id="hours">20</span>hours
              </div>
              <div className={styles.timerBlock}>
                <span id="minutes">56</span>minutes
              </div>
              <div className={styles.timerBlock}>
                <span id="seconds">20</span>seconds
              </div>
            </div>
          </div>

          <div className={styles.educationWrapper}>
            {educationData.map((data, i) => (
              <div key={i} className={styles.educationColumn}>
                <h2 className={styles.educationTitle}>
                  {data.mainTitle}
                </h2>
                <ul>
                  {data.items.map((item, i) => (
                    <li key={i}>
                      <div className={styles.educationItem}>
                        <div className={styles.educationItemHead}>
                          <div className={styles.educationItemIcon}>
                            {item.icon}
                          </div>
                          <h4 className={styles.educationItemTitle}>
                            {item.title}
                          </h4>
                          <div className={styles.educationItemLocation}>
                            {item.subTitle}
                          </div>
                        </div>
                        <p className={styles.educationItemDescription}>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
