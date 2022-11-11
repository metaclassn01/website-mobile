import { AnimateNumber, AnimeteAperture, MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

interface IProps {
  statisticalData?: any;
}

const Statistics = ({ statisticalData }: IProps) => {
  return (
    <div className={styles.container}>
      <SubTitle>Statistics</SubTitle>

      <div className={styles.infoWrap}>
        <div className={styles.infoItem}>
          <div className={styles.dataList}>
            <MotionOnscreen postition='scale'>
              <AnimeteAperture className={styles.dataItem}>
                <AnimateNumber
                  className={styles.price}
                  value={statisticalData.wktoutput}
                  round={100}
                />
                <div className={styles.desc}>WKT in Circulation</div>
              </AnimeteAperture>
            </MotionOnscreen>

            <MotionOnscreen postition='scale'>
              <AnimeteAperture className={styles.dataItem}>
                <AnimateNumber
                  className={styles.price}
                  value={statisticalData.wktleft}
                  round={100}
                />
                <div className={styles.desc}>WKT in Mining Pool</div>
              </AnimeteAperture>
            </MotionOnscreen>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.dataList}>
            <MotionOnscreen postition='scale'>
              <AnimeteAperture className={styles.dataItem}>
                <AnimateNumber
                  className={styles.price}
                  value={statisticalData.userTotalCount}
                  round={1}
                />
                <div className={styles.desc}>Registered Users</div>
              </AnimeteAperture>
            </MotionOnscreen>

            <MotionOnscreen postition='scale'>
              <AnimeteAperture className={styles.dataItem}>
                <AnimateNumber
                  className={styles.price}
                  value={statisticalData.totalCourse}
                  round={1}
                />
                <div className={styles.desc}>Classes Hosted</div>
              </AnimeteAperture>
            </MotionOnscreen>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
