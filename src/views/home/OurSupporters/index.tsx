import cn from 'classnames';
import { AnimeteRoundedRect3, SubTitle } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const OurSupporters = ({ className }: IProps) => {
  return (
    <div className={cn(styles.ourSupporters, className)}>
      <SubTitle backgroundSize='small'>Strategic Partners</SubTitle>

      <div className={styles.list}>
        {[
          '/images/our_supporters1.png',
          '/images/our_supporters2.png',
          '/images/our_supporters3.png',
          '/images/our_supporters4.png',
          '/images/our_supporters5.png',
          '/images/our_supporters6.png',
          '/images/our_supporters7.png',
          '/images/our_supporters8.png',
          '/images/our_supporters9.png',
          '/images/our_supporters10.png',
          '/images/our_supporters11.png',
          '/images/our_supporters12.png',
          '/images/our_supporters13.png',
          '/images/our_supporters14.png',
          '/images/our_supporters15.png',
        ].map((item, index) => {
          return (
            <div key={String(index)} className={styles.item}>
              <img className={styles.img} src={item} alt='' />

              <AnimeteRoundedRect3 className={styles.animeteBg}></AnimeteRoundedRect3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurSupporters;
