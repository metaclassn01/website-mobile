import styles from './index.module.scss';

interface IProps {
  onClose?: () => void;
}

// 引导下载提示
const GuideTip = ({ onClose }: IProps) => {
  return (
    <div className={styles.bootTips} onClick={onClose}>
      <img className={styles.pic} src='/images/boot_tips.png' />
    </div>
  );
};

export default GuideTip;
