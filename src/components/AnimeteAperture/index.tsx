import cn from 'classnames';

// @ts-ignore
import Aperture1 from '/public/json/aperture-1.json';
// @ts-ignore
import Aperture4 from '/public/json/aperture-4.json';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
};

// 光圈动画
const AnimeteAperture = ({ className, children, containerClassName }: IProps) => {
  return (
    <div className={cn(styles.container, containerClassName)}>
      <div className={cn(styles.content, className)}>{children}</div>
    </div>
  );
};

export default AnimeteAperture;
