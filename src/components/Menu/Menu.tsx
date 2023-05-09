import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { socialNetworkData, menuData } from '@/pages/api';

import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { TbHomeMove } from "react-icons/tb";
import styles from './Menu.module.scss';

export const Menu: React.FC = () => {
  const hist = useRouter();
  const [menu, setMenu] = useState<string>(`${styles.menu}`);

  const showBtnGoHome: boolean = hist.asPath !== '/';

  const openMenu = () => {
    const classNames = `${styles.menu} ${styles.active}`;
    setMenu(classNames);
  }

  const closeMenu = () => {
    const classNames = `${styles.menu}`;
    setMenu(classNames);
  };

  return (
    <>
      <AiOutlineMenuFold
        className={styles.hamburger}
        size={40}
        onClick={openMenu}
      />

      <div className={menu}>
        <div className={styles.block}>
          <AiOutlineMenuUnfold
            className={styles.close}
            size={40}
            onClick={closeMenu}
          />
          {showBtnGoHome && (
            <Link className={styles.goHomeLink} href='/'>
              <TbHomeMove
                className={styles.goHome}
                size={36}
              />
            </Link>
          )}
          <nav>
            <ul className={styles.list}>
              {menuData.map((data, i) => (
                <li key={i} className={styles.item}>
                  <Link href={data.link}>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.social}>
            {socialNetworkData.map((data, i) => (
              <Link key={i} href={data.link} target="_blank">
                <Image
                  width={40}
                  height={40}
                  src={data.img}
                  alt={data.title}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </>
  )
};
