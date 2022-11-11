import cn from 'classnames';
import { Mask, Toast } from 'components';
import { DownloadUrlEnum } from 'constants/enum';
import { useState } from 'react';
import { isWeChatBrowser, judgeClient, judgeIsMobile, judgeIsWin10 } from 'utils';

import AndroidDownloadModal from './AndroidDownloadModal';
import GuideTip from './GuideTip';

const UseWindowsTip = 'Please download using Windows computer';

const isMobile = judgeIsMobile();

interface IProps {
  isDisableMobile?: boolean;
  isAndroid?: boolean;
  isIOS?: boolean;
  children?: (({ onClick }: { onClick: () => void }) => void) | React.ReactNode;
}

const DownloadController = ({ isDisableMobile, isAndroid, isIOS, children }: IProps) => {
  const [isShowBootTips, setIsShowBootTips] = useState(false);
  const [isShowAndroidDownloadModal, setIsShowAndroidDownloadModal] = useState(false);

  const handleToggleShowBootTips = () => {
    setIsShowBootTips((val) => !val);
  };

  const handleToggleShowAndroidDownloadModal = () => {
    setIsShowAndroidDownloadModal((val) => !val);
  };

  /**
   * - 微信环境内，右上角引导下载
   * - 安卓端弹出 GooglePlay 和 本地 apk 下载的弹窗
   * - iOS 跳应用市场
   * - PC 分 win10 和非 win10， 默认下载 win7 的包
   */
  const handleClick = () => {
    // 禁止移动端操作，给出提示
    if (isDisableMobile && isMobile) {
      Toast(UseWindowsTip);
      return;
    }

    if (isWeChatBrowser()) {
      handleToggleShowBootTips();
      return;
    }

    if (isAndroid || judgeClient() === 'Android') {
      handleToggleShowAndroidDownloadModal();
      return;
    }

    if (isIOS || judgeClient() === 'IOS') {
      window.open(DownloadUrlEnum.IOS, '_blank');
      return;
    }

    if (judgeIsWin10()) {
      window.location.href = DownloadUrlEnum.Window10;
      return;
    }

    // 默认下载 win7 的包
    window.location.href = DownloadUrlEnum.Window;
  };

  return (
    <>
      {typeof children === 'function' ? (
        children({
          onClick: handleClick,
        })
      ) : (
        <div onClick={handleClick}>{children}</div>
      )}

      {isShowBootTips && <GuideTip onClose={handleToggleShowBootTips} />}

      {isShowAndroidDownloadModal && (
        <AndroidDownloadModal onClose={handleToggleShowAndroidDownloadModal} />
      )}
    </>
  );
};

export default DownloadController;
