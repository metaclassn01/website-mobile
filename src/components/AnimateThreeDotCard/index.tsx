import anime from 'animejs';
import cn from 'classnames';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import styles from './index.module.scss';
import PathTemplate from './PathTemplate.svg';

interface IProps {
  className?: string;
}

const AnimateThreeDotCard: FC<PropsWithChildren<IProps>> = ({ children, className }) => {
  const dotEle1 = useRef<HTMLDivElement>(null);
  const dotEle2 = useRef<HTMLDivElement>(null);
  const dotEle3 = useRef<HTMLDivElement>(null);

  const svgEle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var path1 = anime.path(svgEle.current?.querySelector('#path1') as SVGElement);
    var path2 = anime.path(svgEle.current?.querySelector('#path2') as SVGElement);
    var path3 = anime.path(svgEle.current?.querySelector('#path3') as SVGElement);

    anime({
      targets: dotEle1.current,
      translateX: path1('x'),
      translateY: path1('y'),
      rotate: path1('angle'),
      easing: 'linear',
      duration: 3000,
      direction: 'alternate',
      loop: true,
      autoplay: true,
    });

    anime({
      targets: dotEle2.current,
      translateX: path2('x'),
      translateY: path2('y'),
      rotate: path2('angle'),
      easing: 'linear',
      duration: 3000,
      direction: 'alternate',
      loop: true,
      autoplay: true,
    });

    anime({
      targets: dotEle3.current,
      translateX: path3('x'),
      translateY: path3('y'),
      rotate: path3('angle'),
      easing: 'linear',
      duration: 3000,
      direction: 'alternate',
      loop: true,
      autoplay: true,
    });
  });

  return (
    <div className={cn(styles.container, className)}>
      <div ref={svgEle} className={styles.background}>
        <PathTemplate />
      </div>
      <div ref={dotEle1} className={styles.activeDot} />
      <div ref={dotEle2} className={styles.activeDot} />
      <div ref={dotEle3} className={styles.activeDot} />
      {children}
    </div>
  );
};

export default AnimateThreeDotCard;
