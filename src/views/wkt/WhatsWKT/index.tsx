import { MotionOnscreen, PlanteNum, SubTitle } from 'components';
import React from 'react';

import styles from './index.module.scss';

const WhatsWKT = () => {
  return (
    <section className={styles.container}>
      <SubTitle className={styles.sectionTitle}>What is WKT</SubTitle>

      <div className={styles.p1}>
        <div className={styles.cell}></div>
        <MotionOnscreen postition='scale'>
          <PlanteNum>01</PlanteNum>
          <div>
            WKT（World Knowledge Token）is a cryptocurrency created on the basis of blockchain
            technology
          </div>
        </MotionOnscreen>
      </div>

      <div className={styles.p2}>
        <div className={styles.cell}></div>

        <MotionOnscreen postition='scale'>
          <PlanteNum>02</PlanteNum>
          <div>
            The supply of WKT is limited. It’s produced at a fixed amount (180 million tokens) which
            cannot be tampered
          </div>
        </MotionOnscreen>
      </div>
      <div className={styles.p3}>
        <div className={styles.cell}></div>

        <MotionOnscreen postition='scale'>
          <PlanteNum>03</PlanteNum>
          <div>
            WKT can only be obtained by attending classes on Metaclassn, besides from marketplaces
          </div>
        </MotionOnscreen>
      </div>
      <div className={styles.p4}>
        <MotionOnscreen postition='scale'>
          <PlanteNum>04</PlanteNum>
          <div>
            WKT is a valuable cryptocurrency, and the only official currency issued by Metaclassn
          </div>
        </MotionOnscreen>
      </div>
    </section>
  );
};

export default React.memo(WhatsWKT);
