import anime from 'animejs';
import cn from 'classnames';
import { FC, PropsWithChildren, useEffect, useId, useRef } from 'react';

import BackgroundBlue from './bg-2.svg';
import styles from './index.module.scss';
// import BackgroundLG from './bg-lg.svg';
// import BackgroundSM from './bg-sm.svg';
import BackgroundLG from './lg-without.svg';
import BackgroundMd from './md-without.svg';
import BackgroundSM from './sm-without.svg';

interface IProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  type?: 'green' | 'blue';
}

const Backgrounds = {
  green: {
    sm: BackgroundSM,
    md: BackgroundMd,
    lg: BackgroundLG,
  },
  blue: {
    sm: BackgroundBlue,
    md: BackgroundBlue,
    lg: BackgroundBlue,
  },
};

const AnimateGradientCard: FC<PropsWithChildren<IProps>> = ({
  size = 'sm',
  children,
  className,
  containerClassName,
  type = 'green',
}) => {
  const dotEle = useRef<HTMLDivElement>(null);
  const svgEle = useRef<HTMLDivElement>(null);

  let Background = Backgrounds[type][size];

  useEffect(() => {
    var path1 = anime.path(svgEle.current?.querySelector('#path1') as SVGElement);
    var path2 = anime.path(svgEle.current?.querySelector('#path2') as SVGElement);

    var tl = anime.timeline({
      targets: dotEle.current,
      easing: 'linear',
      duration: 3000,
      loop: true,
      autoplay: false,
    });

    tl.add({
      translateX: path1('x'),
      translateY: path1('y'),
      rotate: path1('angle'),
    })
      .add(
        {
          duration: 400,
          opacity: [1, 0],
        },
        '-=600'
      )
      .add(
        {
          translateX: path2('x'),
          translateY: path2('y'),
          rotate: path2('angle'),
        },
        '+=800'
      )
      .add(
        {
          delay: 800,
          duration: 400,
          opacity: [0, 1],
        },
        '-=3600'
      )
      .add(
        {
          duration: 400,
          opacity: [1, 0],
          endDelay: 800,
        },
        '-=600'
      );

    tl.play();
    return () => {
      tl.pause();
    };
  }, []);
  return (
    <div className={cn(styles.container, containerClassName)}>
      <div className={cn(styles.content, className)}>{children}</div>
      <div ref={svgEle}>
        <Background />
      </div>
      <div ref={dotEle} className={styles.activeDot} />
    </div>
  );
};

export default AnimateGradientCard;
