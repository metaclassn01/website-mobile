import React from 'react';

import styles from './index.module.scss';

type IProps = {
  style?: Record<string, string>;
};

export default function Placeholder({ style }: IProps) {
  return (
    <div className={styles.placeholder} style={style}>
      loading...
    </div>
  );
}
