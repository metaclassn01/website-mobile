import { useClickAway } from 'ahooks';
import cn from 'classnames';
import { LanguageEnum } from 'constants/enum';
import { newsContent } from 'constants/i18nConfig';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, useRef, useState } from 'react';

import { Navigation, ToggleBtn } from './components';
import styles from './index.module.scss';

const LanguageList = [LanguageEnum.en_US, LanguageEnum.zh_TW];

interface IProps {
  className?: string;
  isShowChangeLanguageBtn?: boolean;
  isNeedFill?: boolean;
}

const Header: FC<IProps> = ({ className, isShowChangeLanguageBtn = true, isNeedFill = true }) => {
  const ref = useRef(null);

  const { locale, locales, asPath, push: routerPush } = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false); // 是否打开菜单列表
  const [isLanListOpen, setLanListOpen] = useState(false); // 是否打开语言列表
  const [currentLan, setCurrentLan] = useState(locale);

  const { title } = newsContent[locale as LanguageEnum];

  useClickAway(() => {
    if (isLanListOpen) {
      setLanListOpen(false);
    }
  }, ref);

  const handleToggleMenu = () => {
    setMenuOpen((val) => !val);
  };

  const handleToggleLanOpen = () => {
    setLanListOpen((val) => !val);
  };

  const handleChangeLan = (lan: LanguageEnum) => {
    if (currentLan === lan) {
      return;
    }

    setCurrentLan(lan);

    routerPush(asPath, asPath, { locale: lan });
  };

  return (
    <>
      {isNeedFill && <div className={styles.fill}></div>}
      <motion.div
        className={cn(styles.header, className)}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.appName}>
              <a className={styles.logo} href='https://www.metaclassn.com'>
                Metaclassn
              </a>
            </h1>
          </div>

          {/* {process.env.NODE_ENV === 'development' && <div style={{ color: '#fff' }}>{title}</div>} */}

          <div className={styles.right}>
            {/* {isShowChangeLanguageBtn && (
            <div className={styles.lanBtn} onClick={handleToggleLanOpen} ref={ref}>
              <div className={styles.txt}>{currentLan}</div>
              <div className={styles.triangle}></div>

              {isLanListOpen && (
                <div className={styles.lanList}>
                  {LanguageList.map((item, index) => {
                    return (
                      <div
                        key={String(index)}
                        className={styles.lanItem}
                        onClick={() => handleChangeLan(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )} */}

            <div className={styles.menuBtn} onClick={handleToggleMenu}>
              <ToggleBtn />
            </div>
          </div>
        </div>

        {/* <motion.div
          className={styles.sidebar}
          variants={{
            open: (height = 500) => ({
              clipPath: `circle(${height * 2}px at 90% 30px)`,
              transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
              },
            }),
            closed: {
              clipPath: 'circle(0px at 90% 30px)',
              transition: {
                delay: 0.3,
                type: 'spring',
                stiffness: 400,
                damping: 40,
              },
            },
          }}
        /> */}

        <Navigation
          className={styles.nav}
          style={{ display: isMenuOpen ? 'block' : 'none' }}
          onToggleMenu={handleToggleMenu}
        />
      </motion.div>
    </>
  );
};

export default Header;
