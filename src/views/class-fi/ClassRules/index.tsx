import cn from 'classnames';
import { MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const ClassRules = ({ className }: IProps) => {
  return (
    <div className={cn(styles.classrules, className)}>
      <SubTitle backgroundSize='small'>Class Rules</SubTitle>

      <div className={styles.classrulesList}>
        <div className={styles.item}>
          <MotionOnscreen postition='left'>
            <div className={styles.desc}>
              <p>Only USDT or WKT can be</p>
              <p>used to pay the class fee</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <MotionOnscreen postition='right'>
            <div className={styles.desc}>
              <p>All classes charge by the</p>
              <p>minute on Metaclassn</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <MotionOnscreen postition='left'>
            <div className={styles.desc}>
              <p>Users can decide class</p>
              <p>schedule, price and topics</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <MotionOnscreen postition='right'>
            <div className={styles.desc}>
              <p>The platform will reward</p>
              <p>both Learner and Instructor</p>
              <p>with WKT after a class</p>
            </div>
          </MotionOnscreen>
        </div>
      </div>
    </div>
  );
};

export default ClassRules;
