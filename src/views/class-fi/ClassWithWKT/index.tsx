import { AnimateGradientCard, MotionOnscreen } from 'components';

import styles from './index.module.scss';

const ClassWithWKT = () => {
  return (
    <section className={styles.container}>
      <MotionOnscreen postition='scale'>
        <AnimateGradientCard
          className={styles.itemContainer}
          containerClassName={styles.itemOuter}
          size='lg'
        >
          <h1>Reward for Inviting</h1>
          <div className={styles.line} />
          <div>
            Anyone who invites friends to sign up for the Metaclassn will be entitled to his
            friends‘ WKT earnings, 20% at maximum, according to his platform rankings
          </div>
        </AnimateGradientCard>
      </MotionOnscreen>

      <MotionOnscreen postition='scale'>
        <AnimateGradientCard
          className={styles.itemContainer}
          containerClassName={styles.itemOuter}
          size='lg'
        >
          <h1>Anti-cheating Rules</h1>
          <div className={styles.line} />
          <div>
            When in class, make sure the picture of all participants doesn&rsquo;t freeze for longer
            than 50% of the class duration, or it will be considered as cheating, no WKT rewarded
          </div>
        </AnimateGradientCard>
      </MotionOnscreen>

      <MotionOnscreen postition='scale'>
        <AnimateGradientCard
          className={styles.itemContainer}
          containerClassName={styles.itemOuter}
          size='md'
        >
          <h1>After mining out all the WKT </h1>
          <div className={styles.line} />
          <div>
            While the 180 million WKT is mined out, the platform only supports WKT to attend/perform
            classes
          </div>
        </AnimateGradientCard>
      </MotionOnscreen>
    </section>
  );
};

export default ClassWithWKT;
