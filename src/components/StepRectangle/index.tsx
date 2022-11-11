import cn from 'classnames';
import { MotionOnscreen, SubTitle } from 'components';
import React, { FC, useEffect, useState } from 'react';

import styles from './index.module.scss';

const usersContent = [
  {
    upText: 'Anyone can be an learner or',
    downText: 'instructor on Metaclassn',
  },
  {
    upText: 'There are no limits on what',
    downText: 'users share in classes',
  },
  {
    upText: 'Every user can share knowledge,',
    downText: 'skills, talents with others',
  },
  {
    upText: 'Joining classes will bring',
    downText: 'enormous income and rewards',
  },
  {
    upText: 'People can also learn whatever',
    downText: 'they are insterested in',
  },
];

interface IProps {
  className?: string;
}

// 矩形步骤块
const StepRectangle: FC<IProps> = ({ className = '', ...rest }) => {
  const [curHighlight, setCurHighlight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (curHighlight === usersContent.length - 1) {
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
    <div className={cn(styles.StepRectangle, className)} {...rest}>
      <SubTitle backgroundSize='small'>Our Users</SubTitle>

      {usersContent.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <MotionOnscreen key={index} className={styles.info} postition='left'>
              <div
                className={cn(styles.rectangle, styles.rectangleLeft, {
                  [styles.activeRectangleLeft]: index === curHighlight,
                  [styles.hasPassed]: index < curHighlight,
                  [styles.notPassed]: index > curHighlight,
                })}
              >
                <div className={styles.serialNum}>0 {index + 1}</div>
                <div className={styles.content}>
                  <p>{item.upText}</p>
                  <p>{item.downText}</p>
                </div>
              </div>
            </MotionOnscreen>
          );
        } else {
          return (
            <MotionOnscreen key={index} className={styles.info} postition='right'>
              <div
              className={cn(styles.rectangle, styles.rectangleRight, {
                [styles.activeRectangleRight]: index === curHighlight,
                [styles.hasPassed]: index < curHighlight,
                [styles.notPassed]: index > curHighlight,
              })}
            >
              <div className={styles.content}>
                <p>{item.upText}</p>
                <p>{item.downText}</p>
              </div>
              <div className={styles.serialNum}>0 {index + 1}</div>
            </div>
            </MotionOnscreen>
           
          );
        }
      })}
    </div>
  );
};

export default StepRectangle;
