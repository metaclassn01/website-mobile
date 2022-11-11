import cn from 'classnames';
import { MotionOnscreen } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const MinorTip = ({ className, children }: IProps) => {
  return (
    <MotionOnscreen postition='bottom'>
      <div className={cn(styles.minorTip, className)}>{children}</div>
    </MotionOnscreen>
  );
};

export default MinorTip;
