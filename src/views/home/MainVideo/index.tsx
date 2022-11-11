import { CustomVideo } from 'components';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { isWeChatBrowser } from 'utils';

import styles from './index.module.scss';

type IProp = {};

const MainVideo = forwardRef(({}: IProp, ref: any) => {
  const videoRef = useRef<HTMLVideoElement>();

  useImperativeHandle(ref, () => {
    return {
      onVideoPlay: handleVideoPlay,
    };
  });

  const handleVideoPlay = () => {
    // 微信浏览器，特殊处理
    if (isWeChatBrowser()) {
      const wx = require('weixin-js-sdk');

      // 微信初始化配置。为了会走 ready 函数
      // @ts-ignore
      wx.config({});

      // @ts-ignore
      wx.ready(() => {
        videoPlay();
      });
    } else {
      videoPlay();
    }
  };

  const videoPlay = () => {
    videoRef?.current?.play().catch((e) => {
      videoRef.current!.poster = '/images/banner.png';
    });
  };

  return (
    <div className={styles.wrap} onClick={handleVideoPlay}>
      <CustomVideo ref={videoRef} className={styles.mainVideo} src='/mp4/banner.mp4'></CustomVideo>
    </div>
  );
});

MainVideo.displayName = 'MainVideo1';

export default MainVideo;
