import cn from 'classnames';
import { DownloadBtn, MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const Roadmap = ({ className }: IProps) => {
  return (
    <div className={cn(styles.roadmap, className)}>
      <SubTitle backgroundSize='small'>Metaclassn Roadmap</SubTitle>

      <div className={styles.roadmapList}>
        <div className={styles.item}>
          <div className={styles.month}>
            Q1
            <br />
            2022
          </div>
          <MotionOnscreen postition='left'>
            <div className={styles.desc}>Recruit and establish project core development team</div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <div className={styles.month}>
            Q2
            <br />
            2022
          </div>
          <MotionOnscreen postition='right'>
            <div className={styles.desc}>Complete prototype and begin development</div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <div className={styles.month}>
            Q3
            <br />
            2022
          </div>
          <MotionOnscreen postition='left'>
            <div className={styles.desc}>Beta testing and complete angel round financing</div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <div className={styles.month}>
            Q4
            <br />
            2022
          </div>
          <MotionOnscreen postition='right'>
            <div className={styles.desc}>Launch product and begin WKT mining</div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <div className={styles.month}>
            Q1
            <br />
            2023
          </div>
          <MotionOnscreen postition='left'>
            <div className={styles.desc}>List WKT on major exchanges and open for trade</div>
          </MotionOnscreen>
        </div>

        <div className={styles.item}>
          <div className={styles.month}>
            Q2
            <br />
            2023
          </div>
          <MotionOnscreen postition='right'>
            <div className={styles.desc}>
              Complete technological upgrade and establish global development team
            </div>
          </MotionOnscreen>
        </div>
      </div>

      <DownloadBtn />
    </div>
  );
};

export default Roadmap;
