import anime from 'animejs';
import cn from 'classnames';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import Arc from './arc.svg';
import styles from './index.module.scss';

interface LineProps {
  children?: React.ReactNode;
  className?: string;
  isReverse?: boolean;
  curveHeight?: number;
  dotLeft?: number;
}

const ArcLine: FC<LineProps> = ({ className, isReverse, curveHeight, dotLeft }) => {
  const svgEle = useRef<HTMLDivElement>(null);
  const dotEle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = anime.path(svgEle.current?.querySelector('#path') as SVGElement);
    let animate = anime({
      targets: dotEle.current,
      easing: 'linear',
      duration: 5000,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      loop: true,
      autoplay: true,
      direction: isReverse ? 'reverse' : 'normal',
    });

    return () => {
      animate.pause();
    };
  }, []);

  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.reverse]: isReverse,
        },
        className
      )}
    >
      <div ref={dotEle} className={styles.activeDot} style={{ left: dotLeft}} />
      <div ref={svgEle}>
        <Arc className={styles.arc} style={{ height: curveHeight}} />
      </div>
    </div>
  );
};

const AnimateArcCard: FC<LineProps> = ({ children, curveHeight, dotLeft }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>{children}</div>
      <ArcLine className={styles.arcItem} curveHeight={curveHeight} dotLeft={dotLeft} isReverse/>
      <ArcLine className={styles.arcItem} curveHeight={curveHeight} dotLeft={dotLeft} />
    </div>
  );
};

export default AnimateArcCard;
