import anime from 'animejs';
import cn from 'classnames';
import { useEffect, useRef } from 'react';

import RoundedRect from '/public/svg/roundedRect.svg';

import styles from './index.module.scss';

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
const AnimeteRoundedRect = ({ className }: IProps) => {
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
      duration: 15000,
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

      <RoundedRect />
    </div>
  );
};

export default AnimeteRoundedRect;
