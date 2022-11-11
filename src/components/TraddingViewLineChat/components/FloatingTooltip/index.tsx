import React, { CSSProperties, forwardRef, ForwardRefRenderFunction, ReactElement } from 'react';
import { formatTime } from 'utils/format';

import styles from './index.module.scss';

interface IProps {
  style: CSSProperties;
  data: {
    time: number;
    value: string;
    open: string;
    close: string;
    max: string;
    min: string;
    chg: string;
  };
}

const FloatingTooltip: ForwardRefRenderFunction<React.RefObject<HTMLDivElement>, IProps> = (
  { style, data },
  ref
): ReactElement => {
  return (
    <div
      className={styles.floatingTooltip}
      style={style}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className={styles.tooltipItem}>
        <div>Time</div>
        <div>{formatTime(data.time * 1000)}</div>
      </div>
      <div className={styles.tooltipItem}>
        <div>Open</div>
        <div>{data.value}</div>
      </div>
      <div className={styles.tooltipItem}>
        <div>High</div>
        <div>{data.max}</div>
      </div>
      <div className={styles.tooltipItem}>
        <div>Low</div>
        <div>{data.min}</div>
      </div>
      <div className={styles.tooltipItem}>
        <div>Close</div>
        <div>{data.close}</div>
      </div>
      <div className={styles.tooltipItem}>
        <div>Chg</div>
        <div>{data.chg || '0%'}</div>
      </div>
    </div>
  );
};

export default React.memo(
  forwardRef<React.RefObject<HTMLDivElement>, IProps>((props, ref) => FloatingTooltip(props, ref))
);
