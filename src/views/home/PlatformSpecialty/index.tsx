import cn from 'classnames';
import { MinorTip, MotionOnscreen, SubTitle } from 'components';
import { useEffect } from 'react';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const PlatformSpecialty = ({ className }: IProps) => {
  return (
    <div className={cn(styles.platformSpecialty, className)}>
      <SubTitle>Platform Specialty</SubTitle>

      <div className={styles.leftAnimate}></div>
      <div className={styles.rightAnimate}></div>

      <div className={styles.specialtyList}>
        <MotionOnscreen postition='left' className={styles.item}>
          All courses charge by the minute
        </MotionOnscreen>
        <MotionOnscreen postition='left' className={styles.item}>
          Specialized in 1-on-1 and small group classes
        </MotionOnscreen>
        <MotionOnscreen postition='left' className={styles.item}>
          Users can share any knowledge freely
        </MotionOnscreen>
        <MotionOnscreen postition='left' className={styles.item}>
          Instant matching the talents across the world
        </MotionOnscreen>
        <MotionOnscreen postition='left' className={styles.item}>
          Users decide class prices and schedules
        </MotionOnscreen>
      </div>

      <MinorTip>Becoming world‘s largest Web 3.0 knowledge sharing platform</MinorTip>
    </div>
  );
};

export default PlatformSpecialty;
