import cn from 'classnames';
import { FollowUs, MinorTip, MotionOnscreen, SubTitle } from 'components';
import { EmailAdress } from 'constants/index';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const ContactUs = ({ className }: IProps) => {
  return (
    <div className={cn(styles.contactUs, className)}>
      <SubTitle backgroundSize='small'>Contact Us</SubTitle>

      <MotionOnscreen postition='bottom'>
        <div className={styles.item}>
          <div className={styles.label}>Email Address</div>
          <a className={styles.desc} href={`mailto:${EmailAdress}`}>
            {EmailAdress}
          </a>
        </div>
      </MotionOnscreen>

      <FollowUs isShowTitle={false} />

      <div className={styles.footerAnimate}></div>
    </div>
  );
};

export default ContactUs;
