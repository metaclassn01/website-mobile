import OSS from 'ali-oss';
import { CropperModal, Toast } from 'components';
import Compressor from 'compressorjs';
import dayjs from 'dayjs';
import isEqual from 'lodash/isEqual';
import uniqueId from 'lodash/uniqueId';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from 'services/alioss';

import styles from './index.module.scss';

const formatFileItem = (url) => ({
  id: uniqueId('url'),
  url,
});

const generateUniqueFileName = (name) => {
  const hasFileType = name && `${name}`.split('.').length > 1;

  const fileType = hasFileType ? `${name}`.split('.').slice(-1)?.[0] : '';

  const randomKey = Math.random().toString(36).substring(2);

  const fileName = [randomKey, fileType].join('.');
  const customName = ['web', dayjs().unix(), fileName].join('');

  return customName;
};

// 转成数组
const toArray = (data) => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data;
};

// 图片压缩
const compress = (file) => {
  return new Promise((resolve, reject) => {
    const IMAGE_MAX_WIDTH = 2048;
    const IMAGE_MAX_HEIGHT = 2048;
    const IMAGE_QUALITY = 0.8;
    // eslint-disable-next-line no-new
    new Compressor(file, {
      strict: false,
      quality: IMAGE_QUALITY,
      maxHeight: IMAGE_MAX_WIDTH,
      maxWidth: IMAGE_MAX_HEIGHT,
      mimeType: 'image/jpeg',
      success: resolve,
      error() {
        reject(new Error('压缩图片失败，请检查原始图片。'));
      },
    });
  });
};

// /**
//  * 格式化成 'http://' 开头 '/' 结尾
//  */
// const formatFileBaseUrl = (baseUrl) => {
//   let resBaseUrl = baseUrl;
//   if (baseUrl.indexOf('http') !== 0) {
//     resBaseUrl = 'http://' + baseUrl;
//   }

//   if (baseUrl[baseUrl.length - 1] !== '/') {
//     resBaseUrl += '/';
//   }

//   return resBaseUrl;
// };

// 根据 file 获取视频时长
const getVideoDurationByFile = (file) => {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = url;

    video.onloadedmetadata = () => {
      // 每次调用createObjectURL都会创建一个新的URL,因此需要调用revokeObjectURL释放掉
      URL.revokeObjectURL(url);

      video.remove();

      resolve(video.duration);
    };

    video.onerror = (e) => {
      console.log('video:onerror...', e);

      // 每次调用createObjectURL都会创建一个新的URL,因此需要调用revokeObjectURL释放掉
      URL.revokeObjectURL(url);

      reject();
    };
  });
};

class Uploader extends Component {
  static defaultProps = {
    accept: 'image/*', // 文件类型
    multiple: false, // 是否支持多选
    maxSize: null, // 最多上传多少个
    value: [], // 默认文件列表
    onChange: null, // 文件上传、文件删除 回调
    maxVideoDuration: 15, // 最大视频上传时长 （单位：秒）
    maxVideoSize: 50, // 最大视频文件大小
    maxImageSize: 20, // 最大图片文件大小
    needCut: false, // 需要裁剪
    aspectRatio: 4 / 3, // 裁剪的长宽比
  };

  constructor(props) {
    super(props);

    const { value } = props;

    this.qiniuSubscription = null;

    this.state = {
      inputId: uniqueId('fileInput'),
      percent: 0,
      isUploading: false,
      value,
      fileList: value.map(formatFileItem),
      imageCropperModalVisible: false,
      picUrl: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { value } = nextProps;

    if (!isEqual(prevState.value, value)) {
      return {
        value,
        fileList: toArray(value).map(formatFileItem),
      };
    }

    return null;
  }

  handleFileChoose = (url) => {
    // console.log('url', url);
    this.setState({
      picUrl: url,
      imageCropperModalVisible: true,
    });
  };

  handleFileChange = (e) => {
    e.persist();

    const { multiple, maxSize, needCut } = this.props;
    const { fileList } = this.state;

    if (!e.target.files || !e.target.files?.[0]) return;

    let files = Array.prototype.slice.call(e.target.files);

    if (multiple) {
      if (typeof maxSize === 'number') {
        files = files.slice(0, maxSize - fileList.length);
      }

      files.forEach((file) => this.handleUpload(file));
    } else if (needCut) {
      const reader = new FileReader();
      reader.onload = () => {
        this.handleFileChoose(reader.result);
      };

      reader.readAsDataURL(files?.[0]);
    } else {
      this.handleUpload(files?.[0]);
    }

    e.target.value = '';
  };

  handleUpload = async (file) => {
    let resource = file;

    const { accept } = this.props;

    if (/^image/.test(accept)) {
      // 如果是图片就先压缩
      resource = await compress(file);
    }

    const flag = await this.isFileValid(resource);
    if (!flag) return;

    this.setState({
      isUploading: true,
    });

    // this.onQiniuUpload(resource);
    this.aliossUpload(resource);
  };

  handleRemove = (id) => {
    const { fileList } = this.state;
    const index = fileList.findIndex((item) => item.id === id);

    if (index > -1) {
      fileList.splice(index, 1);

      this.setState(
        {
          fileList,
        },
        () => {
          this.emitChange();
        }
      );
    }
  };

  // 中止上传
  handleDiscontinue = () => {
    if (this.qiniuSubscription && typeof this.qiniuSubscription.unsubscribe === 'function') {
      this.qiniuSubscription.unsubscribe();
    }

    this.resetUpload();
  };

  resetUpload = () => {
    this.setState({
      percent: 0,
      isUploading: false,
    });
  };

  // onQiniuUpload = async (file) => {
  //   const { upload } = await import('qiniu-js');

  //   const fileName = generateUniqueFileName(file.name);

  //   try {
  //     getToken({ fileName }).then(
  //       (result) => {
  //         const observable = upload(file, fileName, result.token);

  //         this.qiniuSubscription = observable.subscribe({
  //           complete: (response) => {
  //             const baseUrl = formatFileBaseUrl(result.baseUrl);
  //             const url = baseUrl + response.key;

  //             this.setState(
  //               (prevState) => ({
  //                 percent: 0,
  //                 isUploading: false,
  //                 fileList: [...prevState.fileList, formatFileItem(url)],
  //               }),
  //               () => {
  //                 this.emitChange();
  //               }
  //             );
  //           },
  //           next: (response) => {
  //             this.setState({
  //               percent: response.total.percent,
  //             });
  //           },
  //         });
  //       },
  //       (e) => {
  //         Toast(e?.message || '上传失败');
  //         this.resetUpload();
  //       }
  //     );
  //   } catch (e) {
  //     Toast(e?.message || '上传失败');
  //     this.resetUpload();
  //   }
  // };

  aliossUpload = async (file) => {
    const fileName = generateUniqueFileName(file.name);

    try {
      const tokenRes = await getToken();

      const client = new OSS({
        accessKeyId: tokenRes?.accessKeyId,
        accessKeySecret: tokenRes?.accessSecret,
        bucket: tokenRes?.bucket,
        region: tokenRes?.endpoint?.replace('.aliyuncs.com', ''),
        stsToken: tokenRes?.token,
        refreshSTSToken: () => ({
          accessKeyId: tokenRes?.accessKeyId,
          accessKeySecret: tokenRes?.accessSecret,
          stsToken: tokenRes?.token,
        }),
        refreshSTSTokenInterval: 300000,
      });

      await client.multipartUpload(tokenRes?.uploadDir + '/' + fileName, file, {
        // 设置分片大小。默认值为1 MB，最小值为100 KB。
        // partSize: 1024 * 1024,
        progress: (p) => {
          // 获取上传进度。
          console.log(p);

          this.setState({
            percent: p * 100,
          });
        },
      });

      const newUrl = tokenRes?.uploadPrefix + fileName;

      this.setState(
        (prevState) => ({
          percent: 0,
          isUploading: false,
          fileList: [...prevState.fileList, formatFileItem(newUrl)],
        }),
        () => {
          this.emitChange();
        }
      );
    } catch (e) {
      console.error('error: ', e);

      Toast(e?.message || 'Failed');
      this.resetUpload();
    }
  };

  isFileValid = async (file) => {
    const { accept, maxVideoDuration, maxVideoSize, maxImageSize } = this.props;

    if (/^video/.test(accept)) {
      /**
       * 视频时长，不能超过 15 秒
       * 注意：如果获取视频时长失败，就校验文件大小，现在产品限定 50M
       */
      const isVideoValid = await getVideoDurationByFile(file).then(
        (duration) => {
          console.log('视频时长：', duration);

          if (duration > maxVideoDuration) {
            Toast(`Sorry, you can only upload videos within ${maxVideoDuration} seconds`);
            return false;
          }

          return true;
        },
        () => {
          if (file.size / 1024 / 1024 > maxVideoSize) {
            Toast(`Sorry, you can only upload videos within ${maxVideoSize} megabytes`);
            return false;
          }

          return true;
        }
      );

      return isVideoValid;
    }

    if (/^image/.test(accept)) {
      if (file.type.toLowerCase() === 'image/gif') {
        Toast('Please select a still photo');
        return false;
      }
      if (file.size / 1024 / 1024 > maxImageSize) {
        Toast(`Sorry, you can only upload images within ${maxImageSize} megabytes`);
        return false;
      }
    }

    return true;
  };

  emitChange = () => {
    const { fileList } = this.state;
    const { onChange } = this.props;

    if (onChange) {
      onChange(fileList.map(({ url }) => url));
    }
  };

  render() {
    const { inputId, percent, fileList, isUploading, imageCropperModalVisible, picUrl } =
      this.state;
    const { accept, multiple, children, aspectRatio, disabled = false } = this.props;

    return (
      <>
        {children({
          percent,
          fileList,
          isUploading,
          onRemove: this.handleRemove,
          onDiscontinue: this.handleDiscontinue,
          File: (fileProps) => {
            return (
              <label className={fileProps.className} htmlFor={inputId}>
                <input
                  id={inputId}
                  type='file'
                  accept={accept}
                  multiple={multiple}
                  className={styles.file}
                  onChange={this.handleFileChange}
                  disabled={disabled}
                />
                {fileProps.children}
              </label>
            );
          },
        })}

        {imageCropperModalVisible && (
          <CropperModal
            src={picUrl}
            onClose={() => this.setState({ imageCropperModalVisible: false })}
            onSuccess={this.handleUpload}
            aspectRatio={aspectRatio}
          />
        )}
      </>
    );
  }
}

export default Uploader;
