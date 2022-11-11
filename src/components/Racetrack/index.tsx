import cn from 'classnames';
import React, { FC } from 'react';

import styles from './index.module.scss';

enum AnimateType {
  leftToRight = 'leftToRight',
  rightToLeft = 'rightToLeft',
  leftToRightShort = 'leftToRightShort',
}

interface IProps {
  type?: keyof typeof AnimateType;
  className?: string;
}

// 跑马线
const Racetrack: FC<IProps> = ({ className = '', type = 'defaultType', ...rest }) => {
  return (
    <div
      className={cn(
        styles.racetrack,
        {
          [styles.defaultType]: type === 'defaultType',
          [styles.leftToRight]: type === 'leftToRight',
          [styles.rightToLeft]: type === 'rightToLeft',
          [styles.leftToRightShort]: type === 'leftToRightShort',
        },
        className
      )}
      {...rest}
    ></div>
  );
};

export default Racetrack;
