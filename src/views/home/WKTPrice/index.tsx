import { useRequest } from 'ahooks';
import { DownloadBtn, PriceWrap, Statistics } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

import styles from './index.module.scss';

const WKTPrice = () => {
  const dispatch = useAppDispatch();

  const { statisticalData } = useAppSelector((state) => state.main);

  useRequest(dispatch.main.fetchStatisticalData, {
    pollingInterval: 5000,
  });

  return (
    <div className={styles.WKTPrice}>
      <Statistics statisticalData={statisticalData} />

      <PriceWrap statisticalData={statisticalData} />

      <DownloadBtn />
    </div>
  );
};

export default WKTPrice;
