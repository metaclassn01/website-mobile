import { AnimateGradientCard, MotionOnscreen, SubTitle } from 'components';

import styles from './index.module.scss';

const ValueOf = () => {
  return (
    <section className={styles.container}>
      <SubTitle>Value of WKT</SubTitle>

      <AnimateGradientCard
        className={styles.itemContainer}
        containerClassName={styles.itemOuter}
        size='md'
      >
        <MotionOnscreen postition='scale'>
          <h1>01</h1>
          <div>
            WKT comes from sharing knowledge; it is limited in number and can be traded freely
          </div>
        </MotionOnscreen>
      </AnimateGradientCard>

      <AnimateGradientCard
        className={styles.itemContainer}
        containerClassName={styles.itemOuter}
        size='md'
      >
        <MotionOnscreen postition='scale'>
          <h1>02</h1>
          <div>
            WKT can be paid for classes; it can be exchanged with knowledge and create knowledge
          </div>
        </MotionOnscreen>
      </AnimateGradientCard>

      <AnimateGradientCard
        className={styles.itemContainer}
        containerClassName={styles.itemOuter}
        size='md'
      >
        <MotionOnscreen postition='scale'>
          <h1>03</h1>
          <div>
            The output cost of WKT will be higher and higher, and there is enormous room for its
            value to increasee knowledge
          </div>
        </MotionOnscreen>
      </AnimateGradientCard>

      <AnimateGradientCard
        className={styles.itemContainer}
        containerClassName={styles.itemOuter}
        size='md'
      >
        <MotionOnscreen postition='scale'>
          <h1>04</h1>
          <div>WKT is a medium to spread human civilization and is worth inheriting and saving</div>
        </MotionOnscreen>
      </AnimateGradientCard>

      <AnimateGradientCard
        className={styles.itemContainer}
        containerClassName={styles.itemOuter}
        size='md'
      >
        <MotionOnscreen postition='scale'>
          <h1>05</h1>
          <div>The platform integrates multiple functions, and only supports WKT in the future</div>
        </MotionOnscreen>
      </AnimateGradientCard>
    </section>
  );
};

export default ValueOf;
