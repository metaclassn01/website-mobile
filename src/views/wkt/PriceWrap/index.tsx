import cn from 'classnames';
import { AnimateNumber, AnimeteAperture, MotionOnscreen, SubTitle, TipTitle } from 'components';
import { CSSProperties, FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

interface IProps {
  className?: string;
  style?: CSSProperties;
  statisticalData?: any;
}

const PriceWrap: FC<PropsWithChildren<IProps>> = ({ className, statisticalData }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.priceWrap}>
        <MotionOnscreen className={styles.priceBox} postition='scale'>
          <div className={styles.lebel}>WKT Opening Price</div>
          <div className={styles.tokenPrice}>
            $<AnimateNumber value={statisticalData?.WKTPrice || 0} round={1} /> each
          </div>
        </MotionOnscreen>

        <MotionOnscreen className={styles.priceBox} postition='scale'>
          <div className={styles.lebel}>WKT Current Mining Cost</div>
          <div className={styles.tokenPrice}>
            $<AnimateNumber value={statisticalData?.costPrice || 0} round={100} /> each
          </div>
        </MotionOnscreen>
      </div>

      <MotionOnscreen className={styles.textTip} postition='scale'>
        The platform will buy back tokens using most of its profit
      </MotionOnscreen>

      <SubTitle>WKT Trade Opening</SubTitle>

      <MotionOnscreen postition='scale'>
        <div className={styles.plate}>
          <div className={styles.openTime}>00:00 UTC 1st March 2023</div>
        </div>

        <div className={styles.textTip}>
          WKT will be synchronically listed on global major exchanges
        </div>
      </MotionOnscreen>
    </div>
  );
};

export default PriceWrap;
