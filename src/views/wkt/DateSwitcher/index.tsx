import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface Iprops {
  switchItems: { id: string; text: string }[];
  currentId: string;
  onSwitch: (currentId: any) => void;
  className?: string;
}

const DateSwitcher: FC<Iprops> = ({
  switchItems,
  currentId,
  onSwitch,
  className,
}): ReactElement => {
  const hanldeClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    onSwitch(id);
  };

  return (
    <div className={cn(styles.dateSwitcherContainer, className)}>
      <div className={styles.innerContainer}>
        {switchItems.map((item) => (
          <div
            key={String(item.id)}
            className={cn(styles.dateItem, {
              [styles.activeItem]: item.id === currentId,
              [styles.withLine]:
                ![currentId, String(+currentId + 1)].includes(item.id) && item.id !== '1',
            })}
            onClick={(e) => hanldeClick(e, item.id)}
          >
            {item.text}
            {item.id === currentId && <div className={styles.dateActive} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSwitcher;
