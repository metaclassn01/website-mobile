import cn from 'classnames';
import { DownloadBtn, MotionOnscreen, SubTitle } from 'components';
import { Transition } from 'framer-motion';

import Carousel from './Carousel';
import styles from './index.module.scss';

type IProps = {
  className?: string;
  transition?: Transition;
  onAnimationComplete?: () => void;
};

const Sharer = ({ className, transition, onAnimationComplete }: IProps) => {
  return (
    <MotionOnscreen
      postition='scale'
      transition={transition}
      viewport={{ margin: '0px 0px 100px 0px' }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className={cn(styles.container, className)}>
        <SubTitle backgroundSize='large'>
          Everyone can share
          <br />
          knowledge on Metaclassn
        </SubTitle>

        <Carousel />
      </div>

      <DownloadBtn />
    </MotionOnscreen>
  );
};

export default Sharer;
