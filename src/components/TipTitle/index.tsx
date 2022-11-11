import cn from 'classnames';
import { MotionOnscreen } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

// 提示标题
const TipTitle = ({ className, children }: IProps) => {
  return (
    <MotionOnscreen postition='scale'>
      <div className={cn(styles.container, className)}>
        <div className={styles.textWrap}>
          <div className={styles.text}>{children}</div>
        </div>
        <div className={styles.line}></div>
      </div>
    </MotionOnscreen>
  );
};

export default TipTitle;
