import anime from 'animejs';
import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  width?: number;
  height?: number;
  rx?: number;
  duration?: number;
};

const AnimeteRect = ({ className, rx = 30, duration = 5000 }: IProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotEle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = anime.path(wrapperRef?.current?.querySelector('.rectPath') as SVGElement);

    const animeInstance = anime({
      targets: dotEle?.current,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: duration,
      loop: true,
    });

    return () => {
      animeInstance.pause();
    };
  }, [duration]);

  return (
    <div className={cn(styles.container, className)} ref={wrapperRef}>
      <div className={cn(styles.activeDot)} ref={dotEle}></div>
      <svg width='100%' height='100%'>
        <rect
          className='rectPath'
          width='100%'
          height='100%'
          rx={rx}
          fill='none'
          // stroke='#4FEDF9'
          strokeWidth='1'
        ></rect>
      </svg>
    </div>
  );
};

export default AnimeteRect;
