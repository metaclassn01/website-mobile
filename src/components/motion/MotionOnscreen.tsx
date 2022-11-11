import { motion, Transition, Variants } from 'framer-motion';
import { CSSProperties, FC, PropsWithChildren, ReactElement } from 'react';

export enum Postitions {
  'left' = 'left',
  'right' = 'right',
  'top' = 'top',
  'bottom' = 'bottom',
  'leftTop' = 'leftTop',
  'rightTop' = 'rightTop',
  'leftBottom' = 'leftBottom',
  'rightBottom' = 'rightBottom',
  'scale' = 'scale',
  'opacity' = 'opacity',
}

interface IProps {
  postition: keyof typeof Postitions;
  className?: string;
  style?: CSSProperties;
  viewport?: any;
  transition?: Transition;
  onAnimationComplete?: () => void;
}

const PostitionsMap = {
  [Postitions.left]: 'offscreenFromLeft',
  [Postitions.right]: 'offscreenFromRight',
  [Postitions.top]: 'offscreenFromTop',
  [Postitions.bottom]: 'offscreenFromBottom',
  [Postitions.leftTop]: 'offscreenFromLeftTop',
  [Postitions.rightTop]: 'offscreenFromRightTop',
  [Postitions.leftBottom]: 'offscreenFromLeftBottom',
  [Postitions.rightBottom]: 'offscreenFromRightBottom',
  [Postitions.scale]: 'offscreenFromScale',
  [Postitions.opacity]: 'offscreenFromOpacity',
};

const defaultVariants: Variants = {
  offscreenFromTop: {
    y: '-100%',
    opacity: 0.1,
  },
  offscreenFromBottom: {
    y: '100%',
    opacity: 0.1,
  },
  offscreenFromRight: {
    x: '-100%',
    opacity: 0.1,
  },
  offscreenFromLeft: {
    x: '100%',
    opacity: 0.1,
  },
  offscreenFromLeftTop: {
    x: '-100%',
    y: '-100%',
    opacity: 0.1,
  },
  offscreenFromRightTop: {
    x: '100%',
    y: '-100%',
    opacity: 0.1,
  },
  offscreenFromLeftBottom: {
    x: '-100%',
    y: '50%',
    opacity: 0.1,
  },
  offscreenFromRightBottom: {
    x: '100%',
    y: '50%',
    opacity: 0.1,
  },
  offscreenFromScale: {
    scale: 0,
    opacity: 0.1,
  },
  offscreenFromOpacity: {
    opacity: 0.1,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const defaultTransition = {
  duration: 1.5,
};

const defaultViewPort = {
  // margin: '100px 0px -100px 0px',
};

const MotionOnscreen: FC<PropsWithChildren<IProps>> = ({
  className,
  style,
  children,
  postition,
  viewport = {},
  transition = {},
  onAnimationComplete,
}): ReactElement => {
  const initial = PostitionsMap[postition];

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView='onscreen'
      variants={defaultVariants}
      viewport={{ ...defaultViewPort, ...viewport }}
      transition={{ ...defaultTransition, ...transition }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnscreen;
