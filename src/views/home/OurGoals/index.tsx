import cn from 'classnames';
import dynamic from 'next/dynamic';

import styles from './index.module.scss';
const StepCircle = dynamic(() => import('components/StepCircle'), { ssr: false });

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const OurGoals = ({ className }: IProps) => {
  return (
    <div className={cn(styles.ourGoals, className)}>
      <StepCircle />
    </div>
  );
};

export default OurGoals;
