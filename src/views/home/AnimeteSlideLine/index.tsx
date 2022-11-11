import cn from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const AnimeteSlideLine = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.line, styles.left)}></div>
      <div className={cn(styles.line, styles.right)}></div>
    </div>
  );
};

export default AnimeteSlideLine;
