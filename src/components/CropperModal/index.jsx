import { Cropper, Mask } from 'components';
import React, { useRef } from 'react';

import styles from './index.module.scss';

const CropperModal = ({ resourceUploadType, src, onClose, onSuccess, aspectRatio }) => {
  const cropperRef = useRef(null);

  const handleCrop = () => {
    // eslint-disable-next-line no-unused-expressions
    cropperRef.current?.crop();
  };

  const handleRotate = () => {
    // eslint-disable-next-line no-unused-expressions
    cropperRef.current?.instance.rotate(45);
  };

  return (
    <Mask className={styles.imageCropperModal}>
      <div className={styles.imageCropperWrap}>
        <Cropper
          resourceUploadType={resourceUploadType}
          style={{ height: 340, width: '100%' }}
          preview='.previewContainer'
          aspectRatio={aspectRatio}
          rotatable
          src={src}
          onSuccess={onSuccess}
          onClose={onClose}
          cropperRef={cropperRef}
        />
      </div>
      <div className={styles.btns}>
        <div className={styles.cancelBtn} onClick={onClose}>
          cancel
        </div>
        <div className={styles.rotate} onClick={handleRotate}>
          rotate
        </div>
        <div className={styles.okBtn} onClick={handleCrop}>
          complete
        </div>
      </div>
    </Mask>
  );
};
export default CropperModal;
