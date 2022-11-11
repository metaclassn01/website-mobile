import anime from 'animejs';
import { FC, ReactElement, useEffect, useRef } from 'react';

import styles from './index.module.scss';
import Path from './pathes.svg';

const PathTimeLine: FC = (): ReactElement => {
  const dotEle = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const path1 = anime.path('#path1');
    const path2 = anime.path('#path2');
    const path3 = anime.path('#path3');

    var tl = anime.timeline({
      targets: dotEle.current,
      easing: 'linear',
      duration: 2000,
      loop: true,
      autoplay: false,
    });
    var tl2 = anime.timeline({
      easing: 'linear',
      duration: 2000,
      loop: true,
      autoplay: false,
    });

    tl.add({
      translateX: path1('x'),
      translateY: path1('y'),
      rotate: path1('angle'),
    })
      .add({
        translateX: path2('x'),
        translateY: path2('y'),
        rotate: path2('angle'),
      })
      .add({
        translateX: path3('x'),
        translateY: path3('y'),
        rotate: path3('angle'),
      });

    tl2
      .add({
        targets: '#path1',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#path2',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#path3',
        strokeDashoffset: [anime.setDashoffset, 0],
      });

    tl.play();
    tl2.play();
  }, []);

  return (
    <div className={styles.dotContainer}>
      <div ref={dotEle} className={styles.dot} />
      <Path />
    </div>
  );
};

export default PathTimeLine;
