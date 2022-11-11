import cn from 'classnames';
import { AnimateBorder, DownloadController, Mask, MotionOnscreen, Toast } from 'components';
import { Transition } from 'framer-motion';
import { judgeClient } from 'utils';

import styles from './index.module.scss';

const isAndroid = judgeClient() === 'Android';

interface IProps {
  transition?: Transition;
  onAnimationComplete?: () => void;
}

const Download = ({ transition, onAnimationComplete }: IProps) => {
  const downloadList = [
    {
      iconClassName: styles.iconWin,
      content: (
        <>
          Windows
          <br />
          Download
        </>
      ),
      isDisableMobile: true,
    },
    // 右侧按钮根据设备判断显示 iOS 或 Android
    isAndroid
      ? {
          iconClassName: styles.iconAndroid,
          content: (
            <>
              Android APP
              <br />
              Download
            </>
          ),
          isDisableMobile: false,
          isAndroid: true,
        }
      : {
          iconClassName: styles.iconIos,
          content: (
            <>
              iOS APP
              <br />
              Download
            </>
          ),
          isDisableMobile: false,
          isIOS: true,
        },
  ];

  return (
    <>
      <div className={styles.download}>
        {downloadList.map((item, index) => {
          return (
            <DownloadController
              key={String(index)}
              isDisableMobile={item.isDisableMobile}
              isAndroid={item.isAndroid}
              isIOS={item.isIOS}
            >
              {({ onClick }) => {
                return (
                  <MotionOnscreen
                    postition='scale'
                    transition={transition}
                    onAnimationComplete={onAnimationComplete}
                  >
                    <AnimateBorder className={styles.itemWrap}>
                      <div className={styles.item} onClick={onClick}>
                        <div className={cn(styles.thirdLogo, item.iconClassName)}></div>
                        <div className={styles.txt}>{item.content}</div>
                      </div>
                    </AnimateBorder>
                  </MotionOnscreen>
                );
              }}
            </DownloadController>
          );
        })}
      </div>
    </>
  );
};

export default Download;
