import { Mask } from 'components';
import React, { useMemo, useState } from 'react';

import styles from './index.module.scss';

const layoutId = 'previewPicture';

// alioss 压缩图片后缀
export const ALIOSS_IMAGEVIEW_SUFFIX = '?x-oss-process=image/resize,w_100';

/**
 * 图片优化，加压缩参数
 * @param {*} props
 *
 * src 原始图片
 * isMini 是否展示缩略图
 * canPreview 能否预览
 * onClick 点击事件
 */
const OptimizationImage = (props = {}) => {
  const { src, isMini, canPreview, onClick, ...rest } = props;
  const [isPreview, setIsPreview] = useState(false);

  // 展示的图片
  const displayUrl = useMemo(() => {
    let url = src;

    if (src && !src.includes('?')) {
      url = isMini ? src + ALIOSS_IMAGEVIEW_SUFFIX : src;
    }
    return url;
  }, [src, isMini]);

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
      return;
    }

    if (canPreview) {
      setIsPreview(true);
    }
  };

  const handleClose = () => {
    setIsPreview(false);
  };

  const handleError = (e) => {
    const { currentTarget } = e;
    currentTarget.onerror = null; // prevents looping
    currentTarget.src = src;
  };

  return (
    <>
      <img {...rest} src={displayUrl} onClick={handleClick} onError={handleError} />

      {isPreview && (
        <Mask className={styles.container} onClick={handleClose}>
          <img className={styles.image} src={src} layoutId={layoutId} onClick={handleClose} />
        </Mask>
      )}
    </>
  );
};

export default OptimizationImage;
