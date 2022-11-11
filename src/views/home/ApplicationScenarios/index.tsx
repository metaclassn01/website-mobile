import cn from 'classnames';
import { AnimateThreeDotCard, MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

type IProps = {
  className?: string;
  children?: React.ReactNode;
};

const ApplicationScenarios = ({ className }: IProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <SubTitle backgroundSize='large'>
        Metaclassn Application
        <br />
        Scenarios
      </SubTitle>

      <AnimateThreeDotCard className={styles.card}>
        <MotionOnscreen postition='scale'>
          Metaclassn is a user-friendly videotelephony and socializing app integrated with Web 3.0
          technology to elevate the income of educators and knowledge-sharers across the world.On
          Metaclassn, everyone can learn(learner), and anyone can be a knowledge-sharer(instructor).
          Everyone is rewarded for their knowledge, whether you are a teacher, student, parent,
          doctor, lawyer, manager, scientist, engineer, artist, craftsman, cashier, housewife,
          farmer, politician, investor, singer, dancer, pianist or entrepreneur
        </MotionOnscreen>
      </AnimateThreeDotCard>

      <AnimateThreeDotCard className={styles.card}>
        <MotionOnscreen postition='scale'>
          Metaclassn also provides a socializing platform for users around the globe. Users can add
          friends, send private chat messages, create group chat and comment on people’s posts.Users
          can post their learning or instructing needs on the home-post section. Users can also post
          their socializing needs such as “I need a friend to talk with me”
        </MotionOnscreen>
      </AnimateThreeDotCard>

      <AnimateThreeDotCard className={styles.card}>
        <MotionOnscreen postition='scale'>
          Once users open a classroom to join classes or video socialize, Metaclassn starts
          calculating their WKT rewards. After finishing the video interaction for a specific time,
          Metaclassn automatically transfers the WKT reward to their balance. (Specific rules for
          WKT calculation please refer to Classfi section on Metaclasn website.)
        </MotionOnscreen>
      </AnimateThreeDotCard>

      <AnimateThreeDotCard className={styles.card}>
        <MotionOnscreen postition='scale'>
          Metaclassn’s goal is to create the world’s largest knowledge sharing platform on the Web
          3.0
        </MotionOnscreen>
      </AnimateThreeDotCard>
    </div>
  );
};

export default ApplicationScenarios;
