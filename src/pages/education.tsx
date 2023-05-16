import { useEffect, useState } from 'react';
import { TimerData } from './api/interface';
import { educationData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import styles from '@/styles/Education.module.scss'

export default function Education() {
  const [years, setYears] = useState<number>(2);
  const [months, setMonths] = useState<number>(8);
  const [days, setDays] = useState<number>(21);
  const [hours, setHours] = useState<number>(14);
  const [minutes, setMinutes] = useState<number>(46);
  const [seconds, setSeconds] = useState<number>(39);

  const timerData: TimerData[] = [
    { timeValue: years, timeName: 'years' },
    { timeValue: months, timeName: 'months' },
    { timeValue: days, timeName: 'days' },
    { timeValue: hours, timeName: 'hours' },
    { timeValue: minutes, timeName: 'minutes' },
    { timeValue: seconds, timeName: 'seconds' },
  ]

  const startTime = '2019-07-15';

  const getTime = () => {
    const time = Date.parse(startTime) - Date.now();

    setYears(-Math.floor((time / (1000 * 60 * 60 * 24 * 31 * 12)) + 1));
    setMonths(-Math.floor((time / (1000 * 60 * 60 * 24 * 31)) % 12));
    setDays(-Math.floor((time / (1000 * 60 * 60 * 24)) % 30));
    setHours(-Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(-Math.floor((time / 1000 / 60) % 60));
    setSeconds(-Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

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
              {timerData.map((data, i) => {
                const { timeValue, timeName } = data;
                return (
                  <div key={i} className={styles.timerBlock}>
                    <span>
                      {timeValue < 10 ? `0${timeValue}` : timeValue}
                    </span>
                    {timeName}
                </div>
                )
              })}
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
