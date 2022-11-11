import cn from 'classnames';
import { AnimeteRoundedRect2, SubTitle } from 'components';
import MotionOnscreen, { Postitions } from 'components/motion/MotionOnscreen';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  isShowTitle?: boolean;
};

const FollowUs = ({ className, isShowTitle = true }: IProps) => {
  return (
    <div className={cn(styles.followUs, className)}>
      {isShowTitle && <SubTitle backgroundSize='small'>Follow Us</SubTitle>}

      <div className={styles.list}>
        {[
          {
            label: 'Twitter',
            logoClassName: styles.logo1,
            postition: 'right',
            onClick: () => {
              window.open('https://twitter.com/metaclassn', '_blank');
            },
          },
          {
            label: 'Telegram',
            logoClassName: styles.logo2,
            onClick: () => {
              window.open('https://t.me/metaclassnofficial', '_blank');
            },
          },
          {
            label: 'Discord',
            logoClassName: styles.logo3,
            postition: 'left',
            onClick: () => {
              window.open('https://discord.gg/GA69Ny4sC3', '_blank');
            },
          },
        ].map((item, index) => {
          return (
            <MotionOnscreen key={String(index)} postition={item.postition as Postitions}>
              <div className={styles.item} onClick={item?.onClick}>
                <div className={cn(styles.thirdLogo, item.logoClassName)}></div>

                <div className={styles.label}>{item.label}</div>

                <div className={styles.bar}>
                  <div className={styles.icon}></div>Metaclassn
                </div>

                <AnimeteRoundedRect2 className={styles.animeteBg} />
              </div>
            </MotionOnscreen>
          );
        })}
      </div>
    </div>
  );
};

export default FollowUs;
