import cn from 'classnames';
import { MotionOnscreen } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  backgroundSize?: 'large' | 'normal' | 'small';
  motionProps?: any;
  children?: React.ReactNode;
};

// 副标题
const SubTitle = ({ className, backgroundSize = 'normal', motionProps, children }: IProps) => {
  return (
    <div className={cn(styles.title, className, styles[backgroundSize])}>
      <MotionOnscreen className={styles.txt} postition='scale' {...motionProps}>
        {children}
      </MotionOnscreen>
    </div>
  );
};

export default SubTitle;
