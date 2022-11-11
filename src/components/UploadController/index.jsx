// import NativeBridge from '@xiaoyu/native-bridge';
import cn from 'classnames';
import { Uploader } from 'components';
import React, { PureComponent } from 'react';

import styles from './index.module.scss';
import Item from './Item';
import Uploading from './Uploading';

class UploadController extends PureComponent {
  handlePlayVideo = async (url) => {
    // const isNativeApp = await NativeBridge.isNativeApp();
    const httpUrl = url.replace(/^https:\/\//i, 'http://');

    // if (isNativeApp) {
    //   NativeBridge.play({
    //     type: 'video',
    //     url: httpUrl,
    //   });
    //   return;
    // }

    window.open(httpUrl, '_blank');
  };

  render() {
    const { maxLength, btnText, accept } = this.props;

    const isVideo = accept === 'video/*';

    return (
      <Uploader {...this.props}>
        {({ File, fileList, percent, isUploading, onRemove }) => {
          return (
            <div className={styles.container}>
              {Array.isArray(fileList) &&
                fileList.map(({ url, id }) => {
                  return (
                    <Item
                      key={id}
                      src={url}
                      isMini
                      isVideo={isVideo}
                      onRemove={() => onRemove(id)}
                      onPlayVideo={() => this.handlePlayVideo(url)}
                    />
                  );
                })}
              {isUploading ? (
                <Uploading percent={percent} />
              ) : (
                <>
                  {fileList?.length < maxLength && (
                    <File
                      className={cn(styles.label, {
                        [styles.iconVideoMachine]: isVideo,
                        [styles.iconCamera]: !isVideo,
                      })}
                    >
                      <div className={styles.dotAnimate} />
                      {btnText && <div className={styles.tip}>{btnText}</div>}
                    </File>
                  )}
                </>
              )}
            </div>
          );
        }}
      </Uploader>
    );
  }
}

UploadController.defaultProps = {
  btnText: '',
};

export default UploadController;
