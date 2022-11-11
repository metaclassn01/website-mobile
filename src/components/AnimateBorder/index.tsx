import cn from 'classnames';
import { FC, PropsWithChildren, ReactElement } from 'react';

import styles from './index.module.scss';

interface IProps {
  animateCount?: number;
  className?: string;
}

const AnimateBorder: FC<PropsWithChildren<IProps>> = ({
  animateCount = 1,
  className,
  children,
}): ReactElement => {
  return (
    <div className={cn(styles.container, { [styles.twoAnimate]: animateCount === 2 }, className)}>
      <div className={styles.background}>{children}</div>
    </div>
  );
};

export default AnimateBorder;
