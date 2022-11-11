import cn from 'classnames';
import { DownloadBtn, MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const OurIntroduction = ({ className }: IProps) => {
  return (
    <div className={cn(styles.ourIntroduction, className)}>
      <SubTitle backgroundSize='small'>Our Introduction</SubTitle>

      <div className={styles.introList}>
        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='right'>
            <img className={styles.pic} src='/gif/ourIntroduction1.gif' />
            <div className={styles.desc}>
              A metaverse platform
              <br />
              for creating value
            </div>
          </MotionOnscreen>
          <div className={styles.line}></div>
        </div>

        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='left'>
            <img className={styles.pic} src='/gif/ourIntroduction2.gif' />
            <div className={styles.desc}>
              A meta universe to really
              <br />
              create value
            </div>
          </MotionOnscreen>

          <div className={styles.line}></div>
        </div>

        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='right'>
            <img className={styles.pic} src='/gif/ourIntroduction3.gif' />
            <div className={styles.desc}>
              Reform the traditional
              <br />
              way of civilization
            </div>
          </MotionOnscreen>

          <div className={styles.line}></div>
        </div>

        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='left'>
            <img className={styles.pic} src='/gif/ourIntroduction4.gif' />
            <div className={styles.desc}>
              Providing users with
              <br />
              immense profit
            </div>
          </MotionOnscreen>

          <div className={styles.line}></div>
        </div>

        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='right'>
            <img className={styles.pic} src='/gif/ourIntroduction5.gif' />
            <div className={styles.desc}>
              Earn WKT rewards by
              <br />
              attending classes
            </div>
          </MotionOnscreen>

          <div className={styles.line}></div>
        </div>

        <div className={styles.introItem}>
          <MotionOnscreen className={styles.info} postition='right'>
            <img className={styles.pic} src='/gif/ourIntroduction6.gif' />
            <div className={styles.desc}>
              Make money by learning
              <br />
              or sharing
            </div>
          </MotionOnscreen>
        </div>
      </div>

      <DownloadBtn />
    </div>
  );
};

export default OurIntroduction;
