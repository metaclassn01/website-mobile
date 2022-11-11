// eslint-disable-next-line import/no-extraneous-dependencies
import 'cropperjs/dist/cropper.css';

import React from 'react';
import Cropper from 'react-cropper';

// eslint-disable-next-line no-unused-vars
import styles from './index.module.scss';

const Croppers = ({ resourceUploadType, cropperRef, onSuccess, onClose, ...extraProps }) => {
  const handleCrop = async () => {
    if (!cropperRef.current?.instance) return;

    // eslint-disable-next-line no-unused-expressions
    cropperRef.current?.instance.getCroppedCanvas().toBlob(async (blob) => {
      blob.lastModifiedDate = new Date();
      blob.name = `${Date.now()}.png`;
      onSuccess(blob);
    }, 'image/png');

    onClose();
  };

  return (
    <div className={styles.container}>
      <Cropper
        viewMode={2}
        autoCropArea={1}
        checkOrientation={false}
        dragMode='move'
        {...extraProps}
        onInitialized={(instance) => {
          if (cropperRef) {
            cropperRef.current = {
              instance,
              crop: handleCrop,
            };
          }
        }}
      />
    </div>
  );
};
export default Croppers;
