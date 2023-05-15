import { educationData, timerData } from './api';
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
            My Education
          </h1>
          <div className={styles.divider} />

          <div className={styles.timer}>
            <div className={styles.timerTitle}>
              Experience Time
            </div>
            <div className={styles.timerWrapper}>
              {timerData.map((data, i) => (
                <div key={i} className={styles.timerBlock}>
                  <span>
                    {data.timeValue}
                  </span>
                  {data.time}
                </div>
              ))}
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
