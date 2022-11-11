import { useMount, useTitle } from 'ahooks';
import { Header, MotionOnscreen } from 'components';
import { LineChartType } from 'constants/enum';
import { useAppDispatch, useAppSelector } from 'hooks';
import createMockData from 'mock/mockData';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { formatPrice, toNumber } from 'utils/format';

// import { DateSwitcher, MainDescription, TradingRules, ValueOf, WhatsWKT } from 'views/wkt';
import styles from './index.module.scss';

const Placeholder = dynamic(() => import('views/home/Placeholder'), { ssr: false });
const DateSwitcher = dynamic(() => import('views/wkt/DateSwitcher'), { ssr: false });
const MainDescription = dynamic(() => import('views/wkt/MainDescription'), { ssr: false });
const TradingRules = dynamic(() => import('views/wkt/TradingRules'), { ssr: false });
const ValueOf = dynamic(() => import('views/wkt/ValueOf'), { ssr: false });
const WhatsWKT = dynamic(() => import('views/wkt/WhatsWKT'), { ssr: false });

const TraddingViewLineChat = dynamic(() => import('components/TraddingViewLineChat'), {
  ssr: false,
});

const SwitchItems = [
  {
    id: LineChartType.Day,
    text: '24h',
  },
  {
    id: LineChartType.Week,
    text: '7days',
  },
  {
    id: LineChartType.Month,
    text: '1mon',
  },
  {
    id: LineChartType.Year,
    text: '1year',
  },
];

const WKT: NextPage = () => {
  // useTitle('WKT');
  const dispatch = useAppDispatch();
  const [chartType, setChartType] = useState<`${LineChartType}`>(LineChartType.Day);
  // const { currentPrice, chartDatas } = useAppSelector((state) => state.market);

  // mock
  const [mockChartDatas, setMockChartDatas] = useState<{
    [key in `${LineChartType}`]: Array<any>;
  }>();
  const mockCurrentPrice = 10.0;

  const handleSwitch = (id: `${LineChartType}`) => {
    setChartType(id);
  };

  useMount(() => {
    // dispatch.market.getChartData();

    setMockChartDatas(createMockData());
  });

  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.backgroundContainer}>
        <MotionOnscreen postition='scale'>
          <div className={styles.borderContainer}>
            <div className={styles.chartDataContainer}>
              <div className={styles.dataItem}>
                <div>WKT Opening Price</div>
                <div className={styles.value}>${toNumber(formatPrice(mockCurrentPrice, 8))}</div>
              </div>
              <div className={styles.dataItem}>
                <div>Ampl</div>
                <div className={styles.value}>0%</div>
              </div>
            </div>
            <DateSwitcher
              className={styles.switcher}
              switchItems={SwitchItems}
              currentId={chartType}
              onSwitch={handleSwitch}
            />

            <LazyLoad
              height={100}
              placeholder={<Placeholder style={{ height: '200px' }} />}
              unmountIfInvisible
            >
              <TraddingViewLineChat
                className={styles.chartContainer}
                chartType={chartType}
                // data={chartDatas?.[chartType] ?? []}
                data={mockChartDatas?.[chartType] ?? []}
              />
            </LazyLoad>
          </div>
        </MotionOnscreen>
      </section>

      <MainDescription />
      <WhatsWKT />
      <TradingRules />
      <ValueOf />
    </div>
  );
};

export default React.memo(WKT);
