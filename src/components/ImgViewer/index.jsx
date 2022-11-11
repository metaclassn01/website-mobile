import { CustomImage, Mask } from 'components';
import Image from 'next/image';
import React, { useState } from 'react';

import styles from './index.module.scss';

// const layoutId = 'previewPicture';

/**
 * src 原始图片
 * canPreview 能否预览
 * onClick 点击事件
 */
const ImgViewer = (props) => {
  const { src, canPreview, onClick, ...rest } = props;
  const [isPreview, setIsPreview] = useState(false);

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
      <Image src={src} layout='fill' alt='chart1' onClick={handleClick} onError={handleError} />
      {isPreview && (
        <Mask className={styles.container} onClick={handleClose}>
          <div className={styles.image} onClick={handleClose} >
            <CustomImage layout='fill' src={src} />
          </div>
        </Mask>
      )}
    </>
  );
};

export default ImgViewer;
