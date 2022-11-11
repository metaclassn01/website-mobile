import cn from 'classnames';
import { CSSProperties, FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

interface IProps {
  className?: string;
  style?: CSSProperties;
}

const PlanteNum: FC<PropsWithChildren<IProps>> = ({ className, style, children }) => {
  return (
    <div className={cn(styles.container, className)} style={style}>
      {children}
    </div>
  );
};

export default PlanteNum;
