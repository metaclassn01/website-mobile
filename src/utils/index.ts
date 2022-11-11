/**
 * 是否微信浏览器
 */
export const isWeChatBrowser = () => {
  if (!navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase) {
    return false;
  }

  return /micromessenger/i.test(navigator.userAgent.toLowerCase());
};

/**
 * 判断是 Android 还是 iOS
 *
 * @returns 'Android' | 'IOS' | 'PC'
 */
export const judgeClient = () => {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    var ua = navigator?.userAgent?.toLowerCase();

    const isAndroid = /android/.test(ua);
    const isIOS = /iphone|ipod|ipad/.test(ua);

    if (isAndroid) {
      return 'Android';
    }

    if (isIOS) {
      return 'IOS';
    }
  }

  return 'PC';
};

/**
 * 判断是否移动端
 */
export const judgeIsMobile = () => {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    const flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    return flag;
  }

  return false;
};

/**
 * 判断是否 Win10
 */
export const judgeIsWin10 = () => {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    const ua = navigator?.userAgent;
    const isWin10 = ua.includes('Windows NT 10');
    return isWin10;
  }

  return false;
};
