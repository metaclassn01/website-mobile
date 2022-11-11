import { OptimizationImage } from 'components';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import ICON_DELETE from '/public/images/icon_delete.png';

import styles from './style.module.scss';

// alioss 视频截取的第一帧后缀
export const ALIOSS_VFRAME_SUFFIX = '?x-oss-process=video/snapshot,t_500,f_jpg,w_60,h_60,m_fast';

const Item = ({ isMini, src, isVideo, onRemove, onPlayVideo }) => {
  /**
   * 1. 视频的截取第一帧
   * 2. 图片使用缩略图
   */
  const url = isVideo ? src + ALIOSS_VFRAME_SUFFIX : src;
  return (
    <div className={styles.container}>
      <div className={styles.dotAnimate} />
      <OptimizationImage
        className={styles.image}
        src={url}
        isMini={isMini}
        canPreview
        alt='upload'
      />

      <div className={styles.close} onClick={onRemove}>
        <Image src={ICON_DELETE} layout='fill' alt='delete' />
      </div>

      {/* <Icon className={styles.close} type="delete_red" onClick={onRemove} alt="close" /> */}

      {/* {isVideo && (
        <div className={styles.wrap} onClick={onPlayVideo}>
          <Icon type="play" className={styles.iconPlay} />
        </div>
      )} */}
    </div>
  );
};

export default Item;
