import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

type IProp = {
  className?: string;
  value?: number | string;
} & anime.AnimeAnimParams;

// 滚动数字
const AnimateNumber = (props: IProp) => {
  const { className, value = 0, ...rest } = props;

  const dynamic = useRef(null);

  useEffect(() => {
    const numberAnimeInstance = anime({
      targets: dynamic.current,
      innerHTML: [0, value],
      easing: 'easeInOutExpo',
      duration: 1000,
      round: 1,
      ...rest,
    });

    return () => {
      numberAnimeInstance.pause();
    };
  }, [value, rest]);

  return <span className={className} ref={dynamic}></span>;
};

export default React.memo(AnimateNumber);
