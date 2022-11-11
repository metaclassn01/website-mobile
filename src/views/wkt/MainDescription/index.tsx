import { useRequest } from 'ahooks';
import { AnimateGradientCard, MotionOnscreen, Statistics, SubTitle } from 'components';
import { ContarctAddress } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react';

import PriceWrap from '../PriceWrap';
import styles from './index.module.scss';

const MainDescription = () => {
  const dispatch = useAppDispatch();

  const { statisticalData } = useAppSelector((state) => state.main);

  useRequest(dispatch.main.fetchStatisticalData, {
    pollingInterval: 5000,
  });

  return (
    <>
      <section>
        <PriceWrap statisticalData={statisticalData} />

        <SubTitle className={styles.sectionTitle}>WKT Distribution</SubTitle>

        <MotionOnscreen className={styles.priceBox} postition='scale'>
          <div className={styles.lebel}>Total Circulation</div>
          <div className={styles.tokenPrice}>180 million tokens</div>

          <div className={styles.line}></div>

          <div className={styles.info}>
            <div className={styles.box}>
              <div className={styles.tokenPrice}>32400000</div>
              <div>Locked up for Team</div>
            </div>
            <div className={styles.box}>
              <div className={styles.tokenPrice}>147600000</div>
              <div>Class-to-Earn</div>
            </div>
          </div>
        </MotionOnscreen>
      </section>
      <section>
        <SubTitle className={styles.sectionTitle}>Contract Address</SubTitle>

        <MotionOnscreen postition='scale'>
          <div className={styles.contarctAddress}>
            <a
              href={`https://bscscan.com/address/${ContarctAddress}`}
              target='_blank'
              rel='noreferrer'
            >
              {ContarctAddress}
            </a>
          </div>
        </MotionOnscreen>
      </section>

      <Statistics statisticalData={statisticalData} />

      <section>
        <SubTitle className={styles.sectionTitle}>Lockup</SubTitle>

        <AnimateGradientCard type='blue' className={styles.lockupContainer}>
          <MotionOnscreen postition='scale' className={styles.lookupItem}>
            <div>Daily Running</div>
            <div className={styles.lookupCount}>18 million</div>
            <div>Monthly Output 1%</div>
          </MotionOnscreen>
          <MotionOnscreen postition='scale' className={styles.lookupItem}>
            <div>Financing</div>
            <div className={styles.lookupCount}>14.4 million</div>
            <div>Monthly Output 8%</div>
          </MotionOnscreen>
        </AnimateGradientCard>
      </section>
    </>
  );
};

export default React.memo(MainDescription);
