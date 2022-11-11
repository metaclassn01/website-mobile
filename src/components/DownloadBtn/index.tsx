import cn from 'classnames';
import { AnimeteRoundedRect4, DownloadController } from 'components';

import styles from './index.module.scss';

interface IProps {
  className?: string;
}

const DownloadBtn = ({ className }: IProps) => {
  return (
    <DownloadController>
      {({ onClick }) => {
        return (
          <div className={cn(styles.downloadWrap, className)} onClick={onClick}>
            Download
            <AnimeteRoundedRect4></AnimeteRoundedRect4>
          </div>
        );
      }}
    </DownloadController>
  );
};

export default DownloadBtn;
