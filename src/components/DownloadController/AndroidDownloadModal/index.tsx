import { Mask } from 'components';
import { DownloadUrlEnum } from 'constants/enum';

import styles from './index.module.scss';

interface IProps {
  onClose?: () => void;
}

// 安卓下载弹窗
const AndroidDownloadModal = ({ onClose }: IProps) => {
  // 安卓谷歌应用市场
  const handleOpenAndroidDownloadUrl = () => {
    window.open(DownloadUrlEnum.Android, '_blank');
  };

  // 安卓 apk
  const handleDownloadApk = () => {
    window.location.href = DownloadUrlEnum.AndroidApk;
  };

  return (
    <Mask>
      <div className={styles.androidDownload}>
        <div className={styles.content}>
          <div className={styles.iconClose} onClick={onClose} />

          <p className={styles.title}>Android APP Download</p>

          <div className={styles.line} />

          <div className={styles.btns}>
            <div className={styles.btn} onClick={handleOpenAndroidDownloadUrl}></div>
            <div className={styles.btn} onClick={handleDownloadApk}></div>
          </div>
        </div>
      </div>
    </Mask>
  );
};

export default AndroidDownloadModal;
