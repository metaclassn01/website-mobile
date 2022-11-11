import cn from 'classnames';
import { MotionOnscreen, SubTitle } from 'components';

const Gif1 = '/gif/user_guide1.gif';
const Gif2 = '/gif/user_guide2.gif';
const Gif3 = '/gif/user_guide3.gif';
const Gif4 = '/gif/user_guide4.gif';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const UserGuide = ({ className }: IProps) => {
  return (
    <div className={cn(styles.userGuide, className)}>
      <SubTitle backgroundSize='small'>User Guide</SubTitle>

      <div className={styles.userGuideList}>
        <MotionOnscreen postition='scale'>
          <div className={styles.item}>
            <div className={styles.main}>
              <div className={styles.info}>
                <div className={styles.label}>Step 1</div>
                <div className={styles.desc}>Download app and register an account</div>
              </div>
              <img className={styles.pic} src={Gif1} />
            </div>
            <div className={styles.line}></div>
          </div>
        </MotionOnscreen>

        <MotionOnscreen postition='scale'>
          <div className={styles.item}>
            <div className={styles.main}>
              <div className={styles.info}>
                <div className={styles.label}>Step 2</div>
                <div className={styles.desc}>Add other users to your network</div>
              </div>
              <img className={styles.pic} src={Gif2} />
            </div>
            <div className={styles.line}></div>
          </div>
        </MotionOnscreen>

        <MotionOnscreen postition='scale'>
          <div className={styles.item}>
            <div className={styles.main}>
              <div className={styles.info}>
                <div className={styles.label}>Step 3</div>
                <div className={styles.desc}>
                  After depositing, begin classes with people in your network using USDT
                </div>
              </div>
              <img className={styles.pic} src={Gif3} />
            </div>
            <div className={styles.line}></div>
          </div>
        </MotionOnscreen>

        <MotionOnscreen postition='scale'>
          <div className={styles.item}>
            <div className={styles.main}>
              <div className={styles.info}>
                <div className={styles.label}>Step 4</div>
                <div className={styles.desc}>Receive your WKT rewards after classes</div>
              </div>
              <img className={styles.pic} src={Gif4} />
            </div>
            <div className={styles.line}></div>
          </div>
        </MotionOnscreen>
      </div>

      <div className={styles.bottomAnimate}></div>
    </div>
  );
};

export default UserGuide;
