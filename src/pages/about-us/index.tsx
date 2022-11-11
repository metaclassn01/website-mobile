import cn from 'classnames';
import {
  AnimateArcCard,
  Header,
  MotionOnscreen,
  StepCircle,
  StepRectangle,
  SubTitle,
} from 'components';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import ApplicationScenarios from 'views/home/ApplicationScenarios';

import styles from './index.module.scss';

const AboutUs: NextPage = () => {
  const router = useRouter();

  const isShowHeader = router?.query?.isShowHeader !== 'false';

  return (
    <div className={styles.container}>
      {isShowHeader && <Header />}

      <ApplicationScenarios />

      <SubTitle backgroundSize='small'>Class Types</SubTitle>

      <div className={styles.classTypes}>
        <div className={cn(styles.classContent, styles.classBackOne)}>
          <MotionOnscreen className={styles.info} postition='right'>
            <div className={styles.num}>0 1</div>

            <div className={styles.classDec}>
              <p>On Metaclassn, users can choose small</p>
              <p>group classes within 9 participants or</p>
              <p>1-on-1 classes</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={styles.gifAnimate} />

        <div className={cn(styles.classContent, styles.classBackTwo)}>
          <MotionOnscreen className={styles.info} postition='left'>
            <div className={styles.num}>0 2</div>

            <div className={styles.classDec}>
              <p>All classes charge by the minute, Users</p>
              <p>may choose suitable class schedule,</p>
              <p>price, and topics</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={cn(styles.gifAnimate, styles.mirror)} />

        <div className={cn(styles.classContent, styles.classBackThree)}>
          <MotionOnscreen className={styles.info} postition='right'>
            <div className={styles.num}>0 3</div>

            <div className={styles.classDec}>
              <p>The platform will reward both Learner and</p>
              <p>Instructor with WKT after a class,</p>
              <p>according to expense or income</p>
            </div>
          </MotionOnscreen>
        </div>

        <div className={styles.gifAnimate} />
      </div>

      <StepRectangle />

      <StepCircle />

      <SubTitle backgroundSize='small'>Future Vision</SubTitle>

      <div className={styles.planBox}>
        <div className={styles.metaDec}>
          <div className={styles.dotAnimate} />
          <AnimateArcCard curveHeight={120} dotLeft={-10}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <h1>01</h1>
              <div className={styles.describe}>
                We will make significant technological upgrading to build wealth with knowledge
              </div>
            </MotionOnscreen>
          </AnimateArcCard>

          <div className={styles.imgLine} />

          <AnimateArcCard curveHeight={120} dotLeft={-10}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <h1>02</h1>
              <div className={styles.describe}>
                Metaclassn will Support 12 regional languages to cover 7 billion global users
              </div>
            </MotionOnscreen>
          </AnimateArcCard>

          <div className={styles.imgLine} />

          <AnimateArcCard curveHeight={150} dotLeft={-11}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <h1>03</h1>
              <div className={styles.describe}>
                We will configure AR and VR to create a metaverse project allowing learning and
                socializing
              </div>
            </MotionOnscreen>
          </AnimateArcCard>

          <div className={styles.imgLine} />

          <AnimateArcCard curveHeight={150} dotLeft={-11}>
            <MotionOnscreen className={styles.info} postition='scale'>
              <h1>04</h1>
              <div className={styles.describe}>
                We aim to benefit to millions of users and increase platform tokens value to over
                $1000 each
              </div>
            </MotionOnscreen>
          </AnimateArcCard>
          <div className={styles.imgLine} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
