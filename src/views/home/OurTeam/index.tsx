import cn from 'classnames';
import { DownloadBtn, MotionOnscreen, SubTitle } from 'components';

import Carousel from './Carousel';
import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const OurTeam = ({ className }: IProps) => {
  return (
    <div className={cn(styles.ourTeam, className)}>
      <SubTitle backgroundSize='small'>Our Team</SubTitle>

      <MotionOnscreen postition='scale'>
        <div className={styles.teamWrap}>
          <div className={styles.txt}>
            Our team is comprised of leading experts and entrepreneurs in blockchain and metaverse
            technology with over 8 years of experience in the virtual learning industry. Our
            previous virtual learning project employed over 1200 personnel. Our company was valued
            at over $1 billion USD with a yearly revenue of more than $200 million USD
          </div>
        </div>
      </MotionOnscreen>

      <MotionOnscreen postition='scale'>
        <Carousel />
      </MotionOnscreen>

      <DownloadBtn />
    </div>
  );
};

export default OurTeam;
