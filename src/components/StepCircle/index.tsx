import cn from 'classnames';
import { CustomImage, MotionOnscreen, SubTitle } from 'components';
import React, { FC, useEffect, useState } from 'react';

import styles from './index.module.scss';

const goalsContent = [
  {
    upText: 'To build the largest Web',
    downText: '3.0 online class platform',
  },
  {
    upText: 'To make knowledge',
    downText: 'more valuable',
  },
  {
    upText: 'To free the educators',
    downText: 'across the world',
  },
  {
    upText: 'To enhance international ',
    downText: 'communication',
  },
  {
    upText: 'To grant users with WKT and',
    downText: 'ownership of Metaclassn',
  },
  {
    upText: 'To make the WKT price get',
    downText: 'close to 50% of the BTC',
  },
  {
    upText: 'To be a hundred year',
    downText: 'lasting organization',
  },
];

interface IProps {
  className?: string;
}

// 圆环形步骤块
const StepCircle: FC<IProps> = ({ className = '', ...rest }) => {
  const [curHighlight, setCurHighlight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (curHighlight === goalsContent.length - 1) {
        setCurHighlight(0);
      } else {
        setCurHighlight(curHighlight + 1);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [curHighlight]);

  return (
    <div className={cn(styles.stepCircle, className)} {...rest}>
      <SubTitle backgroundSize='small'>Our Goals</SubTitle>

      {goalsContent.map((item, index) => {
        return (
          <MotionOnscreen key={index} className={styles.info} postition='scale'>
            <div
              className={cn(styles.circle, {
                [styles.activeCircle]: index === curHighlight,
              })}
            >
              <div className={styles.serialNum}>{index + 1}</div>
              <div className={styles.content}>
                <p>{item.upText}</p>
                <p>{item.downText}</p>
              </div>
              {index !== 0 && index === curHighlight && (
                <>
                  <div className={styles.arrowLeft}>
                    <CustomImage width='60' height='140' src={'/gif/arrow.gif?+' + new Date()} />
                  </div>
                  <div className={styles.arrowRight}>
                    <CustomImage width='60' height='140' src={'/gif/arrow.gif?+' + new Date()} />
                  </div>
                </>
              )}
            </div>
          </MotionOnscreen>
        );
      })}
    </div>
  );
};

export default StepCircle;
