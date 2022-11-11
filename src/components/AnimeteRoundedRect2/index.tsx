import anime from 'animejs';
import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './index.module.scss';
import RoundedRect2 from './roundedRect2.svg';

type IProps = {
  className?: string;
  rectData?: {
    rx?: number;
  };
  animeData?: {
    duration?: number;
  };
};

/** 圆角矩形动画 */
const AnimeteRoundedRect2 = ({ className }: IProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotEle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = anime.path(wrapperRef?.current?.querySelector('.roundedRectPath') as SVGElement);

    const animeInstance = anime({
      targets: dotEle?.current,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 10000,
      loop: true,
      direction: 'reverse',
    });

    return () => {
      animeInstance.pause();
    };
  }, []);

  return (
    <div className={cn(styles.container, className)} ref={wrapperRef}>
      <div className={styles.activeDot} ref={dotEle}></div>

      <RoundedRect2 />
    </div>
  );
};

export default AnimeteRoundedRect2;
